import express from 'express';
import  {registerUser, getUser, login} from '../controllers/userControllers.js'
import {loginValidation, registerValidation} from '../../middlewares/bodyValidator.js'

const router = express.Router()

//post  http://localhost:3001/api/v1/user
router.post('/',registerValidation, registerUser)

//http://localhost:3001/api/v1/user
router.get('/login',loginValidation, login)

//get  http://localhost:3001/api/v1/user
router.get('/', getUser)


export default router;