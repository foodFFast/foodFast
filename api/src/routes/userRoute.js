import express from 'express';
import { check } from 'express-validator';
import { emailExiste } from '../../middlewares/db-validators.js';
import { validarCampos } from '../../middlewares/validar-campo.js';

import  {postUser,getUser} from '../controllers/userControllers.js'

const router = express.Router()

//post  http://localhost:3001/api/v1/user
router.post('/',[
    check("name","El name es obligatorio").not().isEmpty(), 
    check("password","El password debe de ser más de 6 letras").isLength({min:6}),
    check("email","El email no es válido").isEmail(), 
    check("email").custom(emailExiste),
    validarCampos
], postUser)

//get  http://localhost:3001/api/v1/user
router.get('/', getUser)




export default router;