import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { StyledShop } from "./Shop.styled"

import { FaRegClock, FaMapMarkerAlt, FaStar } from "react-icons/fa"
import { fetchShopById } from "../../redux/actions/async"
import { useEffect } from "react"

const Shop = () => {
    const { idShop } = useParams()

    const dispatch = useDispatch()

    const shop = useSelector((state) => state.main.shops.selected)
    const theme = useSelector((state) => state.theme.selectedTheme)

    useEffect(() => {
        dispatch(fetchShopById(idShop))
    }, [dispatch, idShop])

    return !!shop ? (
        <StyledShop theme={theme}>
            <div className="banner">{shop.name}</div>
            <div className="info">
                <span className="hours">
                    <FaRegClock />
                    {shop.hours || "implementar horarios"}
                </span>

                <span className="address">
                    <FaMapMarkerAlt />
                    {shop.address || "implementar direccion"}
                </span>

                <span className="score">
                    <FaStar />
                    {shop.score} / 5
                </span>
            </div>
            <Link to="products">Ver todos los productos del local</Link> <br />
            <Link to="reviews">Ver todas las reseñas del local</Link> <br />
            <Link to="dashboard">Ir al dashboard</Link>
        </StyledShop>
    ) : (
        <h1>Loading...</h1>
    )
}

export default Shop
