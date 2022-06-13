import express from 'express';

import { check } from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campo.js';
import { deleteProduct,
    putProduct,upDate, 
    allProducts, postProduct, 
    filterProducts, 
    getProductbyId,
    getProduct} from '../controllers/productsControllers.js';

import fileUpload from '../../middlewares/imgProductsCapter.js';


const router = express.Router()

//GET http://localhost:3001/api/v1/products?filter=category&filterValue=cafeteria&filterOrder=price&sortOrder=-1
router.get('/', getProduct);

//DEPRECADO
//get product = http://localhost:3001/api/v1/products
//router.get('/',allProducts)

//DEPRECADO
//get product = http://localhost:3001/api/v1/products/filProduct?name=baggio
//router.get('/filProduct',filterProducts)

//get product = http://localhost:3001/api/v1/products/filProduct?name=baggio
router.get('/filProduct',filterProducts)

//GET http://localhost:3001/api/v1/products/12345
router.get('/:id', getProductbyId);

//post product =  http://localhost:3001/api/v1/products
router.post("/",[
    check("name","El name es obligatorio").not().isEmpty(), 
    validarCampos
],postProduct)

//post IMGproduct =  http://localhost:3001/api/v1/products/image
router.post("/image", fileUpload,(req,res)=> {
    const url = `http://localhost:3001/imagesProducts/${req.file.filename}`
    res.json({img: url})
   })


//put product = http://localhost:3001/api/v1/products/754325
router.put("/:id",[
    check("id","No es un id válido").isMongoId(),
    validarCampos
],putProduct)

//delete product = http://localhost:3000/api/v1/products/4312445
router.delete("/:id",[
    check("id","No es un id válido").isMongoId(),
    // check("product").custom(existeProducto),
    validarCampos
],deleteProduct)



//patch product =  http://localhost:3001/api/v1/:id
router.patch('/:id', upDate)



export default router;