// route.js
import connectDB from "@/app/lib/mongodb";
import Appointment from "@/app/models/Appointment";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, email } = await req.json(); 

  try {
    const newURI = process.env.MONGODB_URI_1;
    await connectDB(newURI);
    await Appointment.create({ fullname, email });

    return NextResponse.json({
      msg: ["Appointment request sent successfully"],
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
      return NextResponse.json({ msg: ["Unable to send appointment request."] });
    }
  }
}
