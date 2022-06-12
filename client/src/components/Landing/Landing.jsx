import React from "react"
import { Link } from "react-router-dom"

import Banner from "./Banner/Banner"
import SearchBar from "./SearchBar/SearchBar"
import LocationBar from "./UbicationBar/UbicationBar"

const Landing = () => {
    return (
        <div>
            <SearchBar className="SearchBar" />
            <LocationBar className="LocationBar" />
            <Banner />
            <Link to="dashboard">Ir al dashboard</Link> <br />
            <Link to="categories">Ver todas las categorias</Link> <br />
            <Link to="products">Ver todos los productos</Link> <br />
        </div>
    )
}

export default Landing
