import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGODB_CNN);
    console.log('connect to db');
} catch (error) {
    console.log("error" + error);
}