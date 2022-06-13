import bcryptjs from 'bcryptjs';
import User from "../models/user.js"


export const registerUser = async(req,res) =>{
  const {name,email,password,rol}=req.body;
  try{
    let user = await User.findOne({email})
    if(user) return res.json({err: "existing user"})
    user = new User({name,email,password,rol})
    await user.save()
    return res.json(user)
  }catch(error){
    console.log(error)
    return res.json({err: "Error server"})
  }  
}

export const login = async(req,res)=>{
  const {email, password} = req.body
  try{
    let user = await User.findOne({email})
    if(!user) return res.json({err: "not found user"})
    const passwordCandidate = await user.comparePassword(password)
    if(!passwordCandidate) return res.json({err:"invalid credential"})
    
    //token

    return res.json(user)

  }catch(error){
    console.log(error)
    return res.json({error: "Error server"})
  }
}


export const getUser = async(req,res) =>{
  try{
    const user=await User.find()
    if(!user){
      return res.status(400).json({
        msg:"No hay usuarios para mostrar"
      })
    }
    return res.status(200).json({
      user
    })
  }catch(e){
    console.log(e)
  }
     
   
}