import mongoose, { Schema } from 'mongoose'
import Product from './product';

const orderSchema= new mongoose.Schema({

/*     name:{
        type:String,
        required:[true,"El name es requerido"]
    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"],
        unique:true
    }, */
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    storeId: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: true
    },
    status:{
        type:String,
        required:true,
        enum:["Pending", "Accepted/on hold","Rejected","Delivered"]
    },
    finished: {
        type: Boolean,
        default: false,
        require: true
    },

    img:{
        type:String,
        default: "https://www.eluniverso.com/resizer/5N9j1EK0-8MMn30GXOMaL_y6GMI=/809x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/M7ROUAC34ZCI7AU3WN7GF4TAUY.jpg"
    },
    date:{
        type:Date, // o string
        required:true,

    },
   products: [{
       product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
       },
       cant: {
           type: Number,
           max: 12
       }
   }],

   total:{
    type:Number,
    required:true
    }
})


const Order = mongoose.model("Order",orderSchema)
export default Order;