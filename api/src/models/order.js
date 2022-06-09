import mongoose from 'mongoose'

const orderSchema= new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
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
    product:{
        type:mongoose.Schema.Types.ObjectId,
       ref:"Product",
       required:true
   }
})


const Order = mongoose.model("Order",orderSchema)
export default Order;