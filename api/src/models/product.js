import mongoose from 'mongoose'

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
      // required:true,
       default:false,
    },
    rating:{
        type:Number,
        default: 0
    },
    categories:{
        type:Array, 
        ref:"Category",
        required: true,
    },
    review:{
        type:Number,
        default:0,  
    },
    stock:{
        type:Number,
        default:0,
    }
})

const Product = mongoose.model("Product",productSchema)
export default Product;