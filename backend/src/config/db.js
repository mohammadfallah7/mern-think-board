import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to database successfully");
  } catch (error) {
    console.error("Error while connecting to database", error);
    process.exit(1);
  }
};

export { connectDB };
