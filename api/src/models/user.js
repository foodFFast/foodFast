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
<<<<<<< HEAD
<<<<<<< HEAD
        default:"USER",
        enum:["ADMIN", "USER", "GUEST", "OWNER"]
=======
        default:"GUEST",
        enum:["ADMIN", "USER", "GUEST"]
>>>>>>> 4dc8ce1 (models refactor, create review model)
=======
        default:"USER",
        enum:["ADMIN", "USER", "GUEST", "OWNER"]
>>>>>>> 1d4aa4d (merge manualmente)
    },
   address:{
       type:String,
       required:true
   }
    
})
const User = mongoose.model("User",userSchema)
export default User;