import express from 'express';
import { check } from 'express-validator';
import { validarCampos } from '../../middlewares/validar-campo.js';
import  {login,forgotPass,resetPostPass,resetGetPass} from '../controllers/authControllers.js'

const router = express.Router()

//post  http://localhost:3001/api/v1/auth/login
router.post('/login', login)

//post  http://localhost:3001/api/v1/auth/forgot-password
router.post("/forgot-password" ,forgotPass)




//post  http://localhost:3001/api/v1/auth/reset-password/:id/:token
router.post("/reset-password/:id/:token",[
    check("password","El password debe de ser más de 6 letras").isLength({min:6}),
    validarCampos
],resetPostPass)

//get  http://localhost:3001/api/v1/auth/reset-password/:id/:token
router.get("/reset-password/:id/:token",resetGetPass)









export default router;