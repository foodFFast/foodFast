import 'dotenv/config'
import './connectDB.js'
import morgan from 'morgan'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import categories from './src/routes/categoriesRoute.js'



const app = express()
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));


app.get('/',(req,res)=>{
    res.send("BIENVENIDOS AL PF.\nEsto es un GET a '/'")
})
// http://localhost:3001/api/v1/categories
app.use('/api/v1/categories', categories)



const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log("server on port: " + PORT))