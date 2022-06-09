import mongoose from 'mongoose'

const orderSchema= new mongoose.Schema({
<<<<<<< HEAD

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
=======
    name:{
        type:String,
        required:[true,"El name es requerido"]
    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"],
        unique:true
>>>>>>> 10484027d7d776a63e9ded780c8b33aa96052e90
    },
    status:{
        type:String,
        required:true,
        enum:["Pending","Rejected","Accepted"]  
    },
    img:{
        type:String
    },
    date:{
        type:String, // o string
        required:true,
    },
    total:{
       type:Number,
       required:true
    },
<<<<<<< HEAD
    product:{
        type:mongoose.Schema.Types.ObjectId,
=======
    productId:{
       type:Schema.Types.ObjectId,
>>>>>>> 10484027d7d776a63e9ded780c8b33aa96052e90
       ref:"Product",
       required:true
    }
})

const Order = mongoose.model("Order",orderSchema)
export default Order;