import bcryptjs from "bcryptjs"
import { generarToken } from "../../helpers/generarJwt.js"
import User from "../models/user.js"

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

    const token=await generarToken(users.id)
    res.json({
        users,
        token
    })

}
export const resetPass = async (req, res) => {

}
