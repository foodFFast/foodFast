import { Router } from 'express';
const router = Router();
//import {okGet} from '../controllers/router.controllers.js'

//Importar todos los routers
import categoriesRouter from './categoriesRoutes.js'


router.get('/', (req,res)=>{
    res.send("BIENVENIDOS A LA HOME PAGE!");
})

router.use('/categories',categoriesRouter);


export default router;