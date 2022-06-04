const {Router}=require("express")

const { postCategoria } = require("../../controllers/categorias");



const router=Router();

router.post("/",postCategoria);

module.exports=router;