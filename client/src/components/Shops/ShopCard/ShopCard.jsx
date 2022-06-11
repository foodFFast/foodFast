import { useSelector } from "react-redux"
import { FaStar } from "react-icons/fa"

import { StyledLogo, StyledShopCard } from "./ShopCard.styled"

const randomImg =
    "https://orlandoinformer.com/wp-content/uploads/2014/07/ollivanders-wand-shop-universal-studios-florida-8211-oi.jpg"

const ShopCard = ({ shop }) => {
    const { _id, name, description, img, score } = shop

    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <StyledShopCard theme={theme} key={_id} to={`/shop/${_id}`}>
            <div className="header">
                <span className="name">{name}</span>
                <span className="score">
                    <FaStar />
                    {score} / 5
                </span>
            </div>
            <StyledLogo className="img" img={img || randomImg} />
            <span className="description">{description}</span>
        </StyledShopCard>
    )
}

export default ShopCard
