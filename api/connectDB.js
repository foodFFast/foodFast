import mongoose from "mongoose"

const dbConn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Db connected")
    } catch (error) {
        console.log(error)
        throw new Error("Error a la hora de iniciar la base de datos")
    }
}

export default dbConn
