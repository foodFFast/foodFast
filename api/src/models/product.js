import mongoose from 'mongoose'
import Categories from './category';

const productSchema =new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
   description:{
       type:String,
   },
   
    img:{
        type:String
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
   available:{
       type:Boolean,
       required:true,
       default:false,
   },
   category:{
    type:String, 
    ref:"Category",
    required: true,
   },
   review:{
        type:Number,
        default:0,  
    },
    orderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Store",
        required:true
       }
})


const Product = mongoose.model("Product",productSchema)
export default Product;