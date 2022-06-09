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
<<<<<<< HEAD
<<<<<<< HEAD
        default:0,
    },
    categoria:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Categoria",
       //required:true
     },
    hours:{
       type:String,
       default:"0"
    },
    order:{
        type:mongoose.Schema.Types.
        ObjectId,
        ref:"Order",
        //required:true
    },
    product:{
        type:mongoose.Schema.Types.
        ObjectId,
        ref:"Product"
        //required:true
        }  
=======
        default:0
=======
        default:0,
>>>>>>> 1d4aa4d (merge manualmente)
    },
    categoria:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Categoria",
       //required:true
     },
   hours:{
       type:String,
       default:"0"
<<<<<<< HEAD
   },
   orders: [Order],
   managers: [User], //dueño/s
   reviews: [Review]
>>>>>>> 4dc8ce1 (models refactor, create review model)
=======
    },
   order:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Order",
    //required:true
    } 
>>>>>>> 1d4aa4d (merge manualmente)
})

const Store = mongoose.model("Store",storeSchema)
export default Store;