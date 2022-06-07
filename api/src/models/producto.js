const {Schema,model}=require("mongoose");

const ProductoSchema=Schema({


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


module.exports=model("Producto",ProductoSchema)