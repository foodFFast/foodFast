import { useSelector } from "react-redux"

// import { AiOutlineSearch } from "react-icons/ai"

import CategoryCard from "./CategoryCard/CategoryCard"
import { StyledCategories } from "./Categories.styled"

const Categories = () => {
    const theme = useSelector((state) => state.theme.selectedTheme)

    const categories = useSelector((state) => state.main.categories.filtered)

    return (
        <StyledCategories theme={theme}>
            <div className="scategoriesContainer">
                {!!categories.length &&
                    categories.map((c) => (
                        <CategoryCard key={c._id} category={c} />
                    ))}
            </div>
        </StyledCategories>
    )
}

export default Categories