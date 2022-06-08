import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
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
    role:{
        type:String,
        required:true,
        default:"GUEST",
        enum:["ADMIN", "USER", "GUEST"]
    },
   address:{
       type:String,
       required:true
   }
    
})
const User = mongoose.model("User",userSchema)
export default User;