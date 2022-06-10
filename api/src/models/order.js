import mongoose from "mongoose"
const Schema = mongoose.Schema

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
<<<<<<< HEAD
    status: {
        type: String,
        required: true,
        enum: ["Pending", "Rejected", "Accepted"]
=======
    status:{
        type:String,
        required:true,
        enum:["Pending","Rejected","Accepted","Completed"],
        default: "Pending"
>>>>>>> ed92bc6fa1b96a9a101cae120f9152020245771d
    },
    img: {
        type: String
    },
    date: {
        type: Date, // o string
        required: true,
        default: Date.now
    },
    total: {
        type: Number,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
    /* debería tener una cantidad?? */
})

const Order = mongoose.model("Order", orderSchema)
export default Order
