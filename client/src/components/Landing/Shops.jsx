import React from "react"
import { Link } from "react-router-dom"

const Shops = () => {
    return (
        <div>
            <h1>Locales</h1>
            <Link to="/shop/1">Ver local 1</Link> <br />
            <Link to="/shop/2">Ver local 2</Link> <br />
            <Link to="/shop/3">Ver local 3</Link>
        </div>
    )
}

export default Shops
