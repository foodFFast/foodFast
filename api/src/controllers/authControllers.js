import bcryptjs from "bcryptjs"
import { generarJwt } from "../../helpers/generarJwt.js"
import User from "../models/user.js"
import jwt from "jsonwebtoken"
import { sendEmail } from "../../auth/config-nodemailer.js"

export const login = async (req, res) => {


    const {email,password}=req.body

    const users=await User.findOne({email})
    if(!users){
        return res.status(400).json({
            msg:"User/Password no son correctos-email"
        })
    }
    const validPassword=bcryptjs.compareSync(password,users.password)
    if(!validPassword){
        return res.status(400).json({
            msg:"User/Password no son correctos-pass"
        })
    }

    const token=await generarJwt(users.id)
    res.json({
        users,       
    })

}

export const forgotPass = async (req, res) => {
    const {email}=req.body

   const user=await User.findOne({email})
    if(!user){
         res.json("user not registered")
         return
    }
   
    const secret=process.env.SECRETOPRIVATEKEY + user.password
    const payload={
        email:user.email,
        id:user.id
    }
    const token=jwt.sign(payload,secret,{expiresIn:"2h"})
    //   const link=`http://localhost:3001/api/v1/auth/reset-password/${user.id}/${token}`
    //   console.log(link)

    
     sendEmail(email,user.name,user.id,token)

    res.json({
        msg:"Password reset link has been sent to your email"
    })

        
}



export const resetGetPass = async (req, res) => {
       const {id,token}=req.params
       
       const userId=await User.findById(id)
       if(!id){
        res.json({
            msg:"Invalid id"
        })
        return
       }
       const secret=process.env.SECRETOPRIVATEKEY + userId.password
       try{
              const payload=jwt.verify(token,secret)
            return res.json({email:userId.email})
       }catch(e){
        console.log(e)
       }

}
export const resetPostPass = async (req, res) => {
    const {id,token}=req.params
    const {password}=req.body

    const userId=await User.findById(id)
    if(!id){
     res.json({
         msg:"Invalid id"
     })
     return
    }
   
 
    //  const secret=process.env.SECRETOPRIVATEKEY + userId.password
    try{
        //  const payload=jwt.verify(token,secret)
        
         userId.password=password
        
        const salt=bcryptjs.genSaltSync()
        userId.password=bcryptjs.hashSync(password,salt);


         const saved=new User(userId)

         await saved.save()
         res.json(userId)
    }catch(e){
     console.log(e)
    }

}
