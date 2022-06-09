import mongoose from "mongoose"
const Schema = mongoose.Schema

const orderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "El name es requerido"]
    },
    email: {
        type: String,
        required: [true, "El email es obligatorio"],
        unique: true
    },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "Rejected", "Accepted"]
    },
    img: {
        type: String
    },
    date: {
        type: Date, // o string
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }
})

const Order = mongoose.model("Order", orderSchema)
export default Order
