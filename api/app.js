import 'dotenv/config'
import './connectDB.js'
import morgan from 'morgan'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import categories from './src/routes/categoriesRoute.js'
import products from "./src/routes/productsRoute.js"



const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));



// http://localhost:3000/api/v1/categories
app.use('/api/v1/categories', categories)
// http://localhost:3000/api/v1/products
app.use("/api/v1/products",products)



const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("server on port: " + PORT))