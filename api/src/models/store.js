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
        default:0
    },
    schedule:{ //horario
       type:String,
       default:"0"
   },
   orders: [Order],
   managers: [User], //dueño/s
   reviews: [Review]
})

const Store = mongoose.model("Store",storeSchema)
export default Store;