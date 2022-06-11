import React from "react"
import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const Shop = () => {
    const { idShop } = useParams()
    const shop = useSelector((state) =>
        state.main.shops.find((s) => s._id === idShop)
    )
    return (
        <div>
            <h1>Local numero {shop.name}</h1>
            <Link to="products">Ver todos los productos del local</Link> <br />
            <Link to="reviews">Ver todas las reseñas del local</Link> <br />
            <Link to="dashboard">Ir al dashboard</Link>
        </div>
    )
}

export default Shop
