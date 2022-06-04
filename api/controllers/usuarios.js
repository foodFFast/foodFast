const {response,request}=require("express");
const Usuario = require("../src/models/usuario");



 

const postUsuario=async(req=request,res=response)=>{
  
    
    const {nombre,correo,password,rol}=req.body;
    const usuario=new Usuario({nombre,correo,password,rol});

        
       
    await usuario.save()

    res.json({
        usuario}
        )
}


module.exports={
   postUsuario
}