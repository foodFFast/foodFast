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
import orderRoute from './src/routes/orderRoute.js'
import  userRoute  from './src/routes/userRoute.js'
import mealCombo from './src/routes/mealComboRoute.js'
import path, {dirname} from "path"
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));



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

//http://localhost:3001/api/v1/orders
app.use("/api/v1/orders",orderRoute)
 
//http://localhost:3001/api/v1/order
//app.use('/api/v1/order',orderRoute)

 
//http://localhost:3001/api/v1/user
app.use('/api/v1/user',userRoute)

//http://localhost:3001/api/v1/mealCombo
app.use('/api/v1/mealCombo', mealCombo)


// hago accesible la carpeta de imágenes
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("server on port: " + PORT))