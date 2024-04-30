import mongoose, { Schema } from "mongoose";

const appointmentSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "Full name is required."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."],
  },
  date: {
    type: Date,
    required: false, 
  },
  time: {
    type: String,
    required: false, 
  },
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Appointment =
  mongoose.models.Appointment ||
  mongoose.model("Appointment", appointmentSchema);

export default Appointment;
