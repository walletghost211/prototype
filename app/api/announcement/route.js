import connectDB from "@/app/lib/mongodb.js";
import Announcement from "@/app/models/announcement.js"; // Adjust the import to use the Announcement model
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { title, content } = await req.json(); // Adjust variable names to match the announcement fields

  try {
    const newURI = process.env.MONGODB_URI_1;
    await connectDB(newURI);
    await Announcement.create({ title, content }); // Create a new announcement using the Announcement model

    return NextResponse.json({
      msg: ["Announcement created successfully"],
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
      return NextResponse.json({ msg: ["Unable to create announcement."] });
    }
  }
}

export async function GET() {
  try {
    const newURI = process.env.MONGODB_URI_1;
    await connectDB(newURI);
    const announcements = await Announcement.find({}); // Fetch all announcements from the database

    return NextResponse.json({
      announcements,
    });
  } catch (error) {
    console.error("Error fetching announcements:", error);
    return NextResponse.json({ msg: ["Unable to fetch announcements."] });
  }
}
