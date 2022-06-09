import Store from "../models/store.js"

export const allStore = async (req, res) => {
    try {
        const stores = await Store.find()
        return res.json(stores)
    } catch (error) {
        console.log(error)
        return res.json({ err: "Error de Servidor" })
    }
}

export const getStore = async (req, res) => {}

export const postStore = async (req, res) => {
    try {
        const { name, img, description, hours } = req.body
        let store = await Store.findOne({ name })
        if (store) return res.json({ msg: "the store is already registered" })
        store = new Store({ name, img, description, hours })
        await store.save()
        return res.json({ store })
    } catch (error) {
        console.log(error)
        return res.json({ err: "Error de Servidor" })
    }
}
