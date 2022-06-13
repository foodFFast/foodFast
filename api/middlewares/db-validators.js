
import User from "../src/models/user.js";

export const emailExiste=async(email="")=>{
    const existeEmail=await User.findOne({email});
    if(existeEmail){
        throw new Error(`El email ${email} ya existe`)
        }
   
}


