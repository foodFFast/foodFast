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
       required:true,
<<<<<<< HEAD
       default:false,
    },
    rating:{
        type:Number,
        default: 0
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
    stock:{
        type:Number,
        default:0,
    }
=======
   },
   category:[Categories],

   review:{
    type:Number,
    default:0,
},
    
>>>>>>> 4dc8ce1 (models refactor, create review model)
})

const Product = mongoose.model("Product",productSchema)
export default Product;