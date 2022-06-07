const {Schema,model}=require("mongoose");

const UsuarioSchema=Schema({


    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String
    },
    rol:{
        type:String,
         required:true,
         default:"USER_ROLE",
         enum:["ADMIN_ROLE","USER_ROLE"]
    },
   address:{
       type:String,
       required:true
   }
    
})


module.exports=model("Usuario",UsuarioSchema)