const {Router}=require("express")

const { postUsuario } = require("../../controllers/usuarios");



const router=Router();

router.post("/",postUsuario);

module.exports=router;