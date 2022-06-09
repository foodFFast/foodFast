import mongoose from 'mongoose'

const orderSchema= new mongoose.Schema({

    name:{
        type:String,
        required:[true,"El name es requerido"]
    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"],
        unique:true
    },
    status:{
        type:String,
        required:true,
<<<<<<< HEAD
<<<<<<< HEAD
        enum:["Pending","Rejected","Accepted"]  
=======
        enum:["Pending", "Accepted/on hold","Rejected","Delivered"]
>>>>>>> 4dc8ce1 (models refactor, create review model)
=======
        enum:["Pending","Rejected","Accepted"]  
>>>>>>> 1d4aa4d (merge manualmente)
    },
    img:{
        type:String
    },
    date:{
        type:Date, // o string
        required:true,
    },
<<<<<<< HEAD
    total:{
       type:Number,
       required:true
    },
    productId:{
       type:Schema.Types.ObjectId,
       ref:"Product",
       required:true
   }
=======
   products: [{
       product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
       },
       cant: {
           type: Number,
           max: 12
       }
   }],

   total:{
    type:Number,
    required:true
    }
>>>>>>> 4dc8ce1 (models refactor, create review model)
})


const Order = mongoose.model("Order",orderSchema)
export default Order;