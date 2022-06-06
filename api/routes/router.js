import express from 'express';
import {okGet} from '../controllers/router.controllers.js'
const router = express.Router()


router.get('/',okGet)

export default router;