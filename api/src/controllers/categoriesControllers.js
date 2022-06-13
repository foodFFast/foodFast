import Categories from "../models/category.js"
import Product from "../models/product.js"

export const categories = async (req, res) => {
    try {
        const user = await Categories.find()
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.json({ error: "Error de servidor" })
    }
}

export const category = async (req, res) => {
    const name = req.query.name
    try {
        // if (!name) return res.json({ error: "query invalid" })
        const categories = await Categories.find({ name:  {$regex: name, $options:'i'} })
        if (categories.length === 0)

           

            return res.json({ error: "not found category" })

        return res.json(categories)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: "Error de servidor" })
    }
}

export const postCategory = async (req, res) => {
    try {
        const { name, description, img } = req.body
        let exists = await Categories.find({ name: name })
        if (!exists.length) {
            const myCategory = new Categories({
                name, description, img
            })
            await myCategory.save()
            res.status(201).send("categoría creada exitosamente")
        } else {
            res.status(409).json({
                msg:"La categoría que intenta crear YA EXISTE en la base de datos"
            }
                
            )
        }
    } catch (e) {
        console.log("Error en el postCategory. ", e.message)
    }
}

//Elimina dado un id de categoría.
export const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id

        let isDeleted = await Categories.findByIdAndDelete(id)

        if (isDeleted !== null) {
            res.send("Categoría eliminada exitosamente.")
        } else {
            res.status(404).send("No se encontró la categoría a eliminar.")
        }
    } catch (e) {
        console.log("Error en deleteCategory. ", e.message)
    }
}
