import React from "react"
import { Link } from "react-router-dom"

const Profile = () => {
    return (
        <div>
            <h1>Perfil Usuario</h1>
            <Link to="orders">Ver todos los pedidos</Link> <br />
            <Link to="reviews">Ver todas las reseñas</Link>
        </div>
    )
}

export default Profile
