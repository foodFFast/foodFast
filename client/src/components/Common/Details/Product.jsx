import React from "react"
import { useParams } from "react-router-dom"

const Product = () => {
    const { idProduct } = useParams()
    return (
        <div>
            <h1>Detalle Producto</h1> <br />
            <span>id producto = {idProduct}</span> <br />
        </div>
    )
}

export default Product
