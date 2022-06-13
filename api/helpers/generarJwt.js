import jwt from "jsonwebtoken"


export const generarJwt=(uid="")=>{

    return new Promise((resolve,reject)=>{

        const payload={uid}
        jwt.sign(payload,process.env.SECRETOPRIVATEKEY,{
            expiresIn:"12h"
        },(err,token)=>{
            if(err){
                console.log(err);
                reject("No se pudo generar el token")
            }else{
                resolve(token)
            }
        })
    })
}