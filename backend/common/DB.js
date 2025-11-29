import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING )
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed", error);
    }
}

export default ConnectDB;

