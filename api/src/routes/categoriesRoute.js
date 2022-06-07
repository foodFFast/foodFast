import express from 'express';
import { categories, postCategory } from '../controllers/categoriesControllers.js'

const router = express.Router()


router.get('/',categories)
router.post('/',postCategory)

export default router;