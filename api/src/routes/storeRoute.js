import express from 'express';

import {getStore, postStore} from '../controllers/storeControllers.js'

const router = express.Router()

//get  http://localhost:3000/api/v1/store
router.get('/', getStore)

//post  http://localhost:3000/api/v1/store
router.post('/', postStore)


export default router;
