import express from 'express';

import { postOrder} from '../controllers/orderControllers.js'

const router = express.Router()

//get  http://localhost:3001/api/v1/order
router.post('/', postOrder)




export default router;
