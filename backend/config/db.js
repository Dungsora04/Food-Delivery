import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      `${process.env.MONGODB_URI}/food-delivery`
    )
    .then(() => console.log("Database connected"));
};
