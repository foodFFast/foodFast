import mongoose from 'mongoose'

const orderSchema= new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
/*     name:{ //cambios que estan en el main de github
        type:String,
        required:[true,"El name es requerido"]
    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"],
        unique:true
    }, */
    status:{
        type:String,
        required:true,
        enum:["Pending","Rejected","Accepted"]  
    },
    img:{
        type:String
    },
    date:{
        type:Date, // o string
        required:true,
        default: Date.now
    },
    total:{
       type:Number,
       required:true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    }
    /* */
})

const Order = mongoose.model("Order",orderSchema)
export default Order;