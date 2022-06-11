import Store from "../models/store.js"

export const allStore = async (req, res) => {
    try {
        const stores = await Store.find().populate("productId", {
            storeId: 0,
            __v: 0
        })
        return res.json(stores)
    } catch (error) {
        console.log(error)
        return res.json({ err: "Error de Servidor" })
    }
}

export const getStore = async (req, res) => {
    const id = req.params.id
    try {
        const store = await Store.findById(id).populate("productId", {
            order: 0
        })
        // console.log("estoy en store",store)
        if (!store) return res.json({ error: "not found store" })
        return res.json(store)
    } catch (error) {
        console.log(error)
    }
}

export const postStore = async (req, res) => {
    try {
        const { name, description, hours, img } = req.body
        const store = await Store.findOne({ name })
        if (store) return res.json({ msg: "the store is already registered" })
        const newStore = new Store({ name, description, hours, img })
        await newStore.save()
        return res.json({ newStore })
    } catch (error) {
        console.log(error)
        return res.json({ err: "Error de Servidor" })
    }
}
