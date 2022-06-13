import express from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campo.js';
import { categories, deleteCategory,  category ,postCategory } from '../controllers/categoriesControllers.js'
import fileUpload from '../../middlewares/imgCategoryCapter.js';

const router = express.Router()

//GET: http://localhost:3001/api/v1/categories
router.get('/',categories)

//GET: http://localhost:3001/api/v1/categories/category?name=merienda
router.get('/category', category)

//POST http://localhost:3001/api/v1/categories/
router.post('/',[
    check("name","El name es obligatorio").not().isEmpty(),
    validarCampos
],postCategory)

//postIMG  http://localhost:3001/api/v1/categories/image
router.post("/image", fileUpload,(req,res)=> {
    const url = `http://localhost:3001/imagesCategory/${req.file.filename}`
    res.json({img: url})
})


//DELETE POST http://localhost:3001/api/v1/categories/:id
router.delete('/:id',[
    check("id","No es un id de MongoDb válido").isMongoId(),
    validarCampos
],deleteCategory)



export default router;