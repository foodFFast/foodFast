import React from "react"
import { Link, useParams } from "react-router-dom"

const Dashboard = () => {
    const { idShop } = useParams()
    return (
        <div>
            <h1>Dashboard local {idShop}</h1>
            <Link to="orders">Ver todos los pedidos</Link> <br />
            <Link to="products">Ver todos los productos</Link>
        </div>
    )
}

export default Dashboard
