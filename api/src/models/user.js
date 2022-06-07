const {Schema,model}=require("mongoose");

const UserSchema=Schema({


    name:{
        type:String,
        required:[true,"El nombre es requerido"]
    },
    email:{
        type:String,
        required:[true,"El correo es obligatorio"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"El password es requerido"]
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        // required:true,
        // default:"USER_ROLE"
        // enum:["ADMIN_ROLE","USER_ROLE"]
    },
   address:{
       type:String,
       required:true
   }
    
})


module.exports=model("Usuario",UserSchema)