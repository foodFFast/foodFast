import multer from "multer"
import path, {dirname} from "path"
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));


const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../public/imagesProducts'),
    filename: (req, file, cb)=> {
        cb(null, Date.now() + file.originalname)
    }
})

const fileUpload = multer({
    storage: diskstorage
    // Ahora aqui coloco el NOMBRE QUE FORMATEE EN EL FRONT-END
}).single("imageProduct")

export default fileUpload