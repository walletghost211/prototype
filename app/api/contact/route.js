import connectDB from "@/app/lib/mongodb";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ObjectID } from "mongodb";

async function connectAndHandleDB(operation) {
  try {
    const newURI = process.env.MONGODB_URI_1;
    await connectDB(newURI);
    return await operation();
  } catch (error) {
    console.error("Database operation error:", error);
    return NextResponse.json({
      msg: ["Unable to perform database operation."],
    });
  }
}

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  return connectAndHandleDB(async () => {
    try {
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
        console.error("Error sending message:", error);
        return NextResponse.json({ msg: ["Unable to send message."] });
      }
    }
  });
}

export async function GET(req) {
  return connectAndHandleDB(async () => {
    try {
      const messages = await Contact.find({});
      return NextResponse.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      return NextResponse.json({ msg: ["Unable to fetch messages."] });
    }
  });
}
export async function DELETE(req) {
  const { id } = await req.json();

  return connectAndHandleDB(async () => {
    try {
      await Contact.deleteOne({ _id: ObjectID(id) });
      return NextResponse.json({
        msg: ["Message deleted successfully"],
        success: true,
      });
    } catch (error) {
      console.error("Error deleting message:", error);
      return NextResponse.json({ msg: ["Unable to delete message."] });
    }
  });
}
