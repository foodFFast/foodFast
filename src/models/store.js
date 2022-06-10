import mongoose from 'mongoose'

const storeSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
       type:String,
    },
    img:{
        type:String
    },
    score:{
        type:Number,
        default:0,
    },
    categoria:[{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Category",
       
     }],
    tag: {
         type: Array
     },
    hours:{
       type:Number,
       default:"0"
    },
    order:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
       
    }],
    productId:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
        
    }] 
})

const Store = mongoose.model("Store",storeSchema)
export default Store;