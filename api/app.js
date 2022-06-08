import 'dotenv/config'
import './connectDB.js'
import morgan from 'morgan'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'

//import router
import categoriesRoute from './src/routes/categoriesRoute.js'
import productsRoute from "./src/routes/productsRoute.js"
import storeRoute from './src/routes/storeRoute.js'


//middellwares
const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.get('/',(req,res)=>{
    res.send("BIENVENIDOS AL PF.\nEsto es un GET a '/'")
})

// http://localhost:3001/api/v1/categories
app.use('/api/v1/categories', categoriesRoute)

// http://localhost:3001/api/v1/products
app.use("/api/v1/products",productsRoute)

//http://localhost:3001/api/v1/store
app.use('/api/v1/store',storeRoute)
 

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("server on port: " + PORT))