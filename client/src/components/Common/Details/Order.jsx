import React from "react"
import { useParams } from "react-router-dom"

const Order = () => {
    const { idUser, idShop, idOrder } = useParams()

    return (
        <div>
            <h1>Detalle Pedido</h1>
            {idUser && <span>id usuario = {idUser}</span>} <br />
            {idShop && <span>id local = {idShop}</span>} <br />
            {idOrder && <span>id pedido = {idOrder}</span>} <br />
        </div>
    )
}

export default Order
