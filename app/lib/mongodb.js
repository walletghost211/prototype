import mongoose from "mongoose";

const connectDB = async (uri) => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
