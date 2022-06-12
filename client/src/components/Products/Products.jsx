import { useSelector } from "react-redux"

import { AiOutlineSearch } from "react-icons/ai"

import { StyledProducts, StyledSideBar } from "./Products.styled"
import ProductCard from "./ProductCard/ProductCard"
import { Link } from "react-router-dom"

const Products = () => {
    const theme = useSelector((state) => state.theme.selectedTheme)

    const products = useSelector((state) => state.main.products.all)
    const categories = useSelector((state) => state.main.categories.all)

    return (
        <StyledProducts>
            <StyledSideBar theme={theme}>
                <span className="title">Locales</span>

                <div className="searchInput">
                    <input type="text" placeholder="Buscar por nombre" />
                    <AiOutlineSearch className="searchIcon" />
                </div>

                <div className="categories">
                    <span className="title">Filtrar por categoria</span>
                    <div className="container">
                        {categories.map((c) => (
                            <Link
                                to={`/categories/${c._id}`}
                                key={c._id}
                                onClick={() => console.log("A implementar")}
                                className="category"
                            >
                                {c.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </StyledSideBar>

            <div className="productsContainer">
                {!!products.length &&
                    products.map((p) => (
                        <ProductCard key={p._id} product={p} />
                    ))}
            </div>
        </StyledProducts>
    )
}

export default Products
