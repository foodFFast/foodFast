import express from 'express';
import { check } from 'express-validator';
import { emailExiste } from '../../middlewares/db-validators.js';
import { validarCampos } from '../../middlewares/validar-campo.js';

import  {login,resetPass} from '../controllers/authControllers.js'

const router = express.Router()

//post  http://localhost:3001/api/v1/auth/login
router.post('/login', login)

//get  http://localhost:3001/api/v1/user/auth/reset
router.get('/reset', resetPass)




export default router;