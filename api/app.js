import dotenv from "dotenv"
import morgan from "morgan"
import cors from "cors"
import express from "express"
import cookieParser from "cookie-parser"
import path from "path"

//import router
import categoriesRoute from "./src/routes/categoriesRoute.js"
import productsRoute from "./src/routes/productsRoute.js"
import storeRoute from "./src/routes/storeRoute.js"
import orderRoute from "./src/routes/orderRoute.js"
import userRoute from "./src/routes/userRoute.js"

import dbConn from "./connectDB.js"

const __dirname = path.resolve()
dotenv.config()

//middellwares
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use(express.static(__dirname))
app.use(express.static(path.join(__dirname, "./client/build")))

app.get("/", (req, res) => {
    res.send("BIENVENIDOS AL PF.\nEsto es un GET a '/'")
})

// http://localhost:3001/api/v1/categories
app.use("/api/v1/categories", categoriesRoute)

// http://localhost:3001/api/v1/products
app.use("/api/v1/products", productsRoute)

//http://localhost:3001/api/v1/store
app.use("/api/v1/store", storeRoute)

//http://localhost:3001/api/v1/orders
app.use("/api/v1/orders", orderRoute)

//http://localhost:3001/api/v1/order
app.use("/api/v1/order", orderRoute)

//http://localhost:3001/api/v1/user
app.use("/api/v1/user", userRoute)

dbConn()
const PORT = process.env.PORT || 3001
app.listen(PORT, console.log("server on port: " + PORT))
