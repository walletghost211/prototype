// BarangayClearance.js
import mongoose from 'mongoose';

const BarangayClearanceSchema = new mongoose.Schema({
  fullname: {
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BarangayClearance = mongoose.model('BarangayClearance', BarangayClearanceSchema);

export default BarangayClearance;
