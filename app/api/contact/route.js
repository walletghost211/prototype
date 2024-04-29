import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  try {
    const newURI = process.env.MONGODB_URI_1;
    await connectDB(newURI);
    await Contact.create({ fullname, email, message });

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}
export async function GET() {
  try {
    const newURI = process.env.MONGODB_URI_1;
    await connectDB(newURI);
    const messages = await Contact.find({}); // Fetch all announcements from the database

    return NextResponse.json({
      messages,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json({ msg: ["Unable to fetch messages."] });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  const newURI = process.env.MONGODB_URI_1;
  await connectDB(newURI);
  await Contact.findByIdAndDelete(id);
  return NextResponse.json({ msg: ["Content Deleted"] }), { status: 200 };
}
