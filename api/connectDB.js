import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGODB_CNN);

    mongoose.connection.on('open', ()=>{console.log("connected to DB")});

    console.log('connect to db');
} catch (error) {
    console.log("error" + error);
}

