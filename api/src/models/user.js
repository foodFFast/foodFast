import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
<<<<<<< HEAD
        required:[true,"El correo es obligatorio"],
        //unique:true
=======
        required:true,
        unique:true
>>>>>>> 5f52e2254a4dfcba83c0d9896e4439a234e40c73
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String
    },
    rol:{
        type:String,
        required:true,
<<<<<<< HEAD
        default:"USER_ROLE",
        enum:["ADMIN_ROLE", "USER_ROLE", "GUEST", "OWNER"]
=======
        default:"USER",
        enum:["ADMIN", "USER", "GUEST", "OWNER"]

>>>>>>> 5f52e2254a4dfcba83c0d9896e4439a234e40c73
    },
   address:{
       type:String,
       
   }
    
})
const User = mongoose.model("User",userSchema)
export default User;