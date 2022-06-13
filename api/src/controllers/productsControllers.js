import Product from "../models/product.js"
import Store from "../models/store.js"

export const allProducts = async (req, res) => {
   
    const products = await Product.find()
    if (!products) {
        return res.status(400).json({
            msg: "not found products"
        })
    }
    res.status(201).send(products)
}
export const getProduct = async (req, res) => {
    const { name, filter, sortOrder, filterValue, filterOrder } = req.query

    try {
        if (name) {
            //GET http://localhost:3001/api/v1/products?name=vodka
            const product = await Product.find({
                name: { $regex: name, $options: "i" }
            })
            return product.length === 0
                ? res.json({ error: "not found product" })
                : res.json(product)
        } else if (filter || sortOrder || filterValue || filterOrder) {
            //GET http://localhost:3001/api/v1/products?filter=category&filterValue=cafeteria&filterOrder=price&sortOrder=-1

            //const objFilter = {};
            //objFilter["price"] = "123"  ->  { price: '123'}
            const objFilter = {}
            objFilter[filter] = filterValue

            const objOrder = {}
            objOrder[filterOrder] = sortOrder

            const product = await Product.find(objFilter).sort(objOrder)
            return res.json(
                product.length === 0 ? "not found product" : product
            )
        } else {
            const allProducts = await Product.find()
            return allProducts.length === 0
                ? res.json({ error: "not found all products" })
                : res.json(allProducts)
        }
    } catch (error) {
        console.log(error)
    }
}

export const getProductbyId = async (req, res) => {
    try {
        const id = req.params.id

        let isHex = /^[0-9A-F]{24}$/gi.test(id) //verificación que es un hex de 24 caracteres
        if (!isHex) {
            return res.status(400).json({ error: "no es un objectId" })
        }

        const prod = await Product.findById(id) //populate
        if (!prod) return res.status(404).json({ error: "not found product" })
        res.json(prod)
    } catch (e) {
        console.log(e)
        return res.json({ msg: "Error de servidor, en getProductById" })
    }
}

export const postProduct = async (req, res) => {

    const {  name, ...resto } = req.body
    // const store = await Store.findById(storeId)
    const product = await Product.findOne({ name })
    if (product) {
        return res.status(400).json({
            msg: `El producto ${product.name}, ya existe`
        })
    }
    const data = {
        ...resto,
        // storeId: store._id,
        name
    }
    const newProduct = new Product(data)
    await newProduct.save()
    // store.productId = store.productId.concat(newProduct._id)
    // await store.save()
    res.status(201).json({
        msg: "Producto creado con éxito"
    })
}

export const putProduct = async (req, res) => {
    const { id } = req.params
    const { ...resto } = req.body

    const productoUpdate = await Product.findByIdAndUpdate(id, resto, {
        new: true
    })
    res.status(200).json(productoUpdate)
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.findByIdAndRemove(id)

    res.status(200).json({
        msg: "Producto Eliminado"
    })
}

export const upDate = async (req, res) => {
    try {
        const id = req.params.id
        const upDates = req.body
        const product = await Product.findByIdAndUpdate(id, upDates)
        if (!product) return res.json({ err: "not found product" })
        return res.json({ ok: "upDate Product" })
    } catch (error) {
        console.log(error)
        return res.json({ msg: "Error de servidor" })
    }
}
