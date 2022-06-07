import express from 'express';
import { categories } from '../controllers/categories.controllers.js'

const router = express.Router()


router.get('/',categories)


export default router;