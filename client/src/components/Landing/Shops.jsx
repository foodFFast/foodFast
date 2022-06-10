import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Shops = () => {
    const shops = useSelector((state) => state.main.shops.all)

    return (
        <div>
            <h1>Locales</h1>
            <Link to="/shop/1">Ver local hardcodeado 1</Link> <br />
            <Link to="/shop/2">Ver local hardcodeado 2</Link> <br />
            <Link to="/shop/3">Ver local hardcodeado 3</Link> <br />
            {!!shops.length &&
                shops.map((s) => (
                    <Link key={s._id} to={`/shop/${s._id}`}>
                        {s.name}
                    </Link>
                ))}
        </div>
    )
}

export default Shops
