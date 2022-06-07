import React from "react"
import { Link } from "react-router-dom"

const Reviews = () => {
    return (
        <div>
            <h1>Reseñas</h1>
            <Link to="1">Ver detalle reseña 1</Link> <br />
            <Link to="2">Ver detalle reseña 2</Link> <br />
            <Link to="3">Ver detalle reseña 3</Link> <br />
        </div>
    )
}

export default Reviews
