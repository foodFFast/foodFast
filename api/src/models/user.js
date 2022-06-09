import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
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
        required:true
    },
    img:{
        type:String
    },
    role:{
        type:String,
<<<<<<< HEAD
        // required:true,
         default:"USER_ROLE"
        // enum:["ADMIN_ROLE","USER_ROLE"]
=======
        required:true,
        default:"USER",
        enum:["ADMIN", "USER", "GUEST", "OWNER"]
>>>>>>> 10484027d7d776a63e9ded780c8b33aa96052e90
    },
   address:{
       type:String,
       
   }
    
})
const User = mongoose.model("User",userSchema)
export default User;