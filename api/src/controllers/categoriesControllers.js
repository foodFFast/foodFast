import Categories from '../models/category.js'


export const categories = async(req,res)=>{
    try {
        const user = await Categories.find()
        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

export const postCategory = async(req,res)=>{
    try{
        const {name} = req.body;

        let exists = await Categories.find({name: name});
        
        if(!exists.length){
            const myCategory = new Categories({
                name: name
                //más campos a añadir
            });
            await myCategory.save();
            res.status(201).send("categoría creada exitosamente");
        }else{
            res.status(409).send("La categoría que intenta crear YA EXISTE en la base de datos");
        }

    }catch(e){
        console.log("Error en el postCategory. ", e.message);
    }
}

//Elimina dado un id de categoría.
export const deleteCategory = async(req,res)=>{
    try{
        const id = req.params.id;

        let isDeleted = await Categories.findByIdAndDelete(id);
        console.log("isDeleted es: ", isDeleted);
        if(isDeleted !== null){
            res.send("Categoría eliminada exitosamente.");
        }else{
            res.status(404).send("No se encontró la categoría a eliminar.");
        }
    }catch(e){
        console.log("Error en deleteCategory. ", e.message);
    }
}