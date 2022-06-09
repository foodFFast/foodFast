import express from 'express';
import { getAllOrders, postOrder } from "../controllers/ordersControllers.js";

const router = express.Router();

//GET http://localhost:3001/api/v1/orders
router.get('/', getAllOrders);

//POST http://localhost:3001/api/v1/orders
router.post('/', postOrder);

export default router; 