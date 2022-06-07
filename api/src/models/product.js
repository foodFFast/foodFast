const {Schema,model}=require("mongoose");

const ProductSchema=Schema({


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


module.exports=model("Usuario",ProductSchema)