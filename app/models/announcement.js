import mongoose, { Schema } from "mongoose";

const announcementSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required."],
    trim: true,
    minLength: [2, "Title must be at least 2 characters long."],
    maxLength: [50, "Title must be less than 50 characters."],
  },
  content: {
    type: String,
    required: [true, "Content is required."],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Announcement =
  mongoose.models.Announcement ||
  mongoose.model("Announcement", announcementSchema);

export default Announcement;
