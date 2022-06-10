import express from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campo.js';

import {allStore, postStore, getStore} from '../controllers/storeControllers.js'
import fileUpload from '../../middlewares/imgStoreCapter.js';

const router = express.Router()

//get  http://localhost:3001/api/v1/store
router.get('/', allStore)

//get  http://localhost:3001/api/v1/store/:idStore
router.get('/:id', getStore)


//post  http://localhost:3001/api/v1/store
router.post('/',[
    check("name","El name es obligatorio").not().isEmpty(),
    validarCampos
],postStore)

//postIMG  http://localhost:3001/api/v1/store/image
router.post("/image", fileUpload,(req,res)=> {
    res.json(req.file)
})


export default router;
