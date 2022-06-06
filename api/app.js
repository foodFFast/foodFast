import 'dotenv/config'
import './connectDB.js'
import express from 'express'
import cookieParser from 'cookie-parser'
import router from './routes/router.js'



const app = express()
app.use(cookieParser());
app.use(express.json());

app.use('/', router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log("server on port: " + PORT))