const express=require("express")
const cookieParser = require('cookie-parser');
const cors=require("cors")
const morgan=require("morgan")
const {dbConnect}=require("./database");


class Server{

  constructor(){
      this.app=express();
      this.port=process.env.PORT;
      // POSTMAN
      this.path={
          categoria:"/category",
          usuario:"/user"
      }
      //conectar a la base de datos
      this.connectDb();
      //Middlewares
      this.middlewares();
      //Rutas
     this.routes()
  
  
    }
   // conexión a base de datos
    async connectDb(){
        await dbConnect();
    }
   // middlewares
   middlewares(){
       //cors
       this.app.use(cors())
       //parseo del body
       this.app.use(express.json())
       //cookie-parser
       this.app.use(cookieParser());
       //morgan
       this.app.use(morgan("tiny"))
   }
   //RUTAS
   routes(){
       this.app.use(this.path.categoria,require("./routes/categorias"))
       this.app.use(this.path.usuario,require("./routes/usuarios.js"))
       
   }
   //listen to port
   listen(){
       this.app.listen(this.port,()=>{
           console.log("Listening on port",this.port)
       })
   }
   

}


module.exports=Server
