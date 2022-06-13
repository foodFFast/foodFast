import { useSelector } from "react-redux"
import { FaDollarSign, FaPlus } from "react-icons/fa"
import { StyledProductCard } from "./ProductCard.styled"

const randomImg =
    "https://orlandoinformer.com/wp-content/uploads/2014/07/ollivanders-wand-shop-universal-studios-florida-8211-oi.jpg"

const ProductCard = ({ product }) => {
    const {
        _id,
        name,
        price,
        description,
        img = randomImg,
        available
    } = product

    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <StyledProductCard
            theme={theme}
            key={_id}
            to={`/products/${_id}`}
            img={img}
        >
            <span className="img" img={img} />
            <div className="header">
                <span className="name">{name}</span>
                <span className="price">
                    <FaDollarSign />
                    {price}
                </span>
            </div>
            <span className="description">
                {description || "agregar descripcion"}
            </span>

            <button disabled={!available} className="addBtn">
                <FaPlus />
            </button>
        </StyledProductCard>
    )
}

export default ProductCard
