import express from 'express';
import { categories } from '../controllers/categoriesControllers.js'

const router = express.Router()


router.get('/',categories)



export default router;