import mongoose from 'mongoose'
import bcrypt from "bcryptjs";

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

userSchema.pre('save', async function(next){
    const user = this;
    if(!user.isModified('password')) return next()
    try{
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
        next()
    }catch(error){
        console.log(error)
        throw new Error ("Error bcrypt password")
    
    }
})

userSchema.methods.comparePassword = async function(passwordCandidate){
    return await bcrypt.compare(passwordCandidate, this.password)
}


const User = mongoose.model("User",userSchema)
export default User;