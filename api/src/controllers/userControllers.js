import bcryptjs from 'bcryptjs';
import User from "../models/user.js"

export const postUser = async(req,res) =>{
  try{
    const {name,email,password,rol}=req.body;

   
    const users=new User({name,email,password,rol});
     
    //Encriptar password
    const salt=bcryptjs.genSaltSync() //hacer más complicado el método de encriptación 
    users.password=bcryptjs.hashSync(password,salt);  
    await users.save()

    res.json({users})
  }catch(e){
      console.log(e)
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