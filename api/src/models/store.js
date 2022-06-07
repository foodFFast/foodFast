import mongoose from 'mongoose'

const storeSchema= new mongoose.Schema({


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
    score:{
        type:Number,
        default:0,
       
    },

   categoria:{
       type:Schema.Types.ObjectId,
       ref:"Categoria",
       required:true
   },
   hours:{
       type:String,
       default:"0"
   },
   order:{
    type:Schema.Types.ObjectId,
    ref:"Order",
    required:true
   }
    
})

const Store = mongoose.model("Store",storeSchema)
export default Store;