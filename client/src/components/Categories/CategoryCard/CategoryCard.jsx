import { useSelector } from "react-redux"
// import { FaStar } from "react-icons/fa"

import { StyledLogo, StyledCategoryCard } from "./CategoryCard.styled"

const randomImg =
    "https://orlandoinformer.com/wp-content/uploads/2014/07/ollivanders-wand-shop-universal-studios-florida-8211-oi.jpg"

const CategoryCard = ({ category }) => {
    const { _id, name, description, img = randomImg } = category

    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <StyledCategoryCard theme={theme} key={_id} to={_id}>
            <StyledLogo className="img" img={img} />
            <span className="name">{name}</span>
            <span className="description">
                {description || "Descripcion categoria"}
            </span>
        </StyledCategoryCard>
    )
}

export default CategoryCard
