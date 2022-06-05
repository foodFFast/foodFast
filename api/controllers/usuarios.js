const Usuario = require("../src/models/usuario");



 

const postUsuario=async(req,res)=>{
  
    
    const {nombre,correo,password,rol}=req.body;
    const usuario=new Usuario({nombre,correo,password,rol});

        
       
    await usuario.save()

    res.send("hola")
}


module.exports={
   postUsuario
}