import express from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campo.js';

import {allStore, postStore, getStore} from '../controllers/storeControllers.js'
import fileUpload from '../../middlewares/imgCategoryCapter.js';

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



export default router;
