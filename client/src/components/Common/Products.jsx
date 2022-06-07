import React from "react"
import { Link, useParams } from "react-router-dom"

const Products = () => {
    const { idShop } = useParams()
    return (
        <div>
            <h1>Productos local {idShop}</h1>
            <Link to="1">Ver detalle producto 1</Link> <br />
            <Link to="2">Ver detalle producto 2</Link> <br />
            <Link to="3">Ver detalle producto 3</Link>
        </div>
    )
}

export default Products
