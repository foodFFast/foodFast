import React from "react"
import { useParams } from "react-router-dom"

const Review = () => {
    const { idUser, idShop, idReview } = useParams()

    return (
        <div>
            <h1>Detalle Pedido</h1>
            {idUser && <span>id usuario = {idUser}</span>} <br />
            {idShop && <span>id local = {idShop}</span>} <br />
            {idReview && <span>id review = {idReview}</span>}
        </div>
    )
}

export default Review
