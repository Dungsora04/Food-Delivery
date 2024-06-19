import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://bobbyspencer:3871249@cluster0.vhulhdq.mongodb.net/food-delivery').then(()=>console.log("Database connected"));
}