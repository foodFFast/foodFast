import React from "react"
import { Link, useParams } from "react-router-dom"

const Shop = () => {
    const { idShop } = useParams()
    return (
        <div>
            <h1>Local numero {idShop}</h1>
            <Link to="products">Ver todos los productos del local</Link> <br />
            <Link to="reviews">Ver todas las reseñas del local</Link> <br />
            <Link to="dashboard">Ir al dashboard</Link>
        </div>
    )
}

export default Shop
