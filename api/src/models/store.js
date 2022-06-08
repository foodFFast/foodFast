import mongoose from 'mongoose'
import Order from './order';
import Review from './review';
import User from './user';

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
    rating:{ //promedio de todas sus reseñas
        type:Number,
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
    },
    schedule:{ //horario
       type:String,
       default:"0"
   },
   orders: [Order],
   managers: [User], //dueño/s
   reviews: [Review]
>>>>>>> 4dc8ce1 (models refactor, create review model)
})

const Store = mongoose.model("Store",storeSchema)
export default Store;