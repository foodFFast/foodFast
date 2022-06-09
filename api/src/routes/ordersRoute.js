import express from 'express';
import { getAllOrders } from "../controllers/ordersControllers.js";

const router = express.Router();

//GET http://localhost:3001/api/v1/orders
router.get('/', getAllOrders);

export default router; 