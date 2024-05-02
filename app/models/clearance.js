import mongoose from "mongoose";

const BarangayClearanceSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  purposeOfTransaction: {
    type: String,
    required: true,
  },
  referencePerson: {
    type: String,
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

const BarangayClearance = mongoose.model(
  "BarangayClearance",
  BarangayClearanceSchema
);

export default BarangayClearance;
