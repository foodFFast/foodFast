import express from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campo.js';

import {allStore, postStore, getStore} from '../controllers/storeControllers.js'

import multer from "multer"
import path, {dirname} from "path"
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const router = express.Router()



//get  http://localhost:3000/api/v1/store
router.get('/', allStore)

//get  http://localhost:3000/api/v1/store/:idStore
router.get('/:id', getStore)



const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../public/imagesStore'),
    filename: (req, file, cb)=> {
        cb(null, Date.now() + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
    // Ahora aqui coloco el NOMBRE QUE FORMATEE EN EL FRONT-END
}).single("imageStore")


//post  http://localhost:3001/api/v1/store/image
router.post("/image", fileUpload,(req,res)=> {
    res.json(req.file)
})

//post  http://localhost:3001/api/v1/store
router.post('/',[
    check("name","El name es obligatorio").not().isEmpty(),
    validarCampos
],postStore)

export default router;
