import connectDB from "@/app/lib/mongodb";
import BarangayClearance from "@/app/models/clearance";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    address,
    purposeOfTransaction,
    referencePerson,
  } = await req.json();

  try {
    const newURI = process.env.MONGODB_URI_1;
    await connectDB(newURI);
    await BarangayClearance.create({
      firstName,
      middleName,
      lastName,
      email,
      phoneNumber,
      address,
      purposeOfTransaction,
      referencePerson,
    });

    return NextResponse.json({
      msg: ["Barangay clearance request sent successfully"],
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
      return NextResponse.json({
        msg: ["Unable to send barangay clearance request."],
      });
    }
  }
}

export async function GET() {
  try {
    const newURI = process.env.MONGODB_URI_1;
    await connectDB(newURI);
    const clearances = await BarangayClearance.find({});

    return NextResponse.json({
      clearances,
    });
  } catch (error) {
    console.error("Error fetching barangay clearances:", error);
    return NextResponse.json({ msg: ["Unable to fetch barangay clearances."] });
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  const newURI = process.env.MONGODB_URI_1;
  await connectDB(newURI);
  await BarangayClearance.findByIdAndDelete(id);
  return NextResponse.json({ msg: ["Barangay clearance deleted"] });
}
