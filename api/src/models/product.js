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
   category:[Categories],

   review:{
        type:Number,
        default:0,  
    },
})


const Product = mongoose.model("Product",productSchema)
export default Product;