import React from "react"
import { Link } from "react-router-dom"

const Orders = () => {
    return (
        <div>
            <h1>Pedidos</h1>
            <Link to="1">Ver detalle pedido 1</Link> <br />
            <Link to="2">Ver detalle pedido 2</Link> <br />
            <Link to="3">Ver detalle pedido 3</Link> <br />
        </div>
    )
}

export default Orders
