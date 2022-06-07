import mongoose from 'mongoose'

const productSchema =new mongoose.Schema({

    name:{
        type:String,
        required:[true,"El nombre es requerido"]
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
    },
   available:{
       type:Boolean,
       required:true,
   },
   categoria:{
       type:Schema.Types.ObjectId,
       ref:"Categoria",
       required:true
   },
   review:{
    type:Number,
    default:0,
},
    
})


const Product = mongoose.model("Product",productSchema)
export default Product;