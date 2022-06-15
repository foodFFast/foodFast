import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    name:{
        type: String,
        default: "Usuario anónimo",
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
    rol:{
        type:String,
        required:true,
        default:"USER",
        enum:["ADMIN", "USER", "GUEST", "OWNER"]

    },
   address:{
       type:String,
       
   }
    
})
const User = mongoose.model("User",userSchema)
export default User;