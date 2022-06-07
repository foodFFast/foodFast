import React from "react"
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <div>
            <h1>Landing</h1>
            <Link to="tests">Redux Tests</Link> <br />
            <Link to="shops">Ver todos los locales</Link> <br />
            <Link to="categories">Ver toas las categorias</Link> <br />
            <Link to="user/1">Ir al perfil del usuario 1</Link> <br />
            <Link to="user/2">Ir al perfil del usuario 2</Link> <br />
            <Link to="user/3">Ir al perfil del usuario 3</Link> <br />
            <Link to="shop/1">Ir al landing del local 1</Link> <br />
            <Link to="shop/2">Ir al landing del local 2</Link> <br />
            <Link to="shop/3">Ir al landing del local 3</Link> <br />
        </div>
    )
}

export default Landing
