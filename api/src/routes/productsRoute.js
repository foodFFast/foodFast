import express from 'express';

import { check } from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campo.js';
import { deleteProduct,putProduct,upDate, allProducts, postProduct, filterProducts} from '../controllers/productsControllers.js';

import multer from "multer"
import path, {dirname} from "path"
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router()


//get product = http://localhost:3001/api/v1/products

router.get('/',allProducts)

//get product = http://localhost:3001/api/v1/products/filProduct?name=baggio
router.get('/filProduct',filterProducts)

//post product =  http://localhost:3001/api/v1/products
router.post("/",[
    check("name","El name es obligatorio").not().isEmpty(), 
    check("category","La category es obligatorio").not().isEmpty(), 
    check("storeId","No es un id válido").isMongoId(),
    validarCampos
],postProduct)

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




//=======================================
const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../public/imagesProducts'),
    filename: (req, file, cb)=> {
        cb(null, Date.now() + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
    // Ahora aqui coloco el NOMBRE QUE FORMATEE EN EL FRONT-END
}).single("imageProduct")

//patch product =  http://localhost:3001/api/v1/products/image
router.post("/image", fileUpload,(req,res)=> {
    // Luego de pasar por el middleware me devuelve las caracteristicas en req.file
    // ASi que se lo devuelvo a mi front primero XD
    const url = req.file.path
    res.json({img: url})
   })



//patch product =  http://localhost:3001/api/v1/:id
router.patch('/:id', upDate)


export default router;