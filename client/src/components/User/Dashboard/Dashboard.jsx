import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CategoryCard from "../../Categories/CategoryCard/CategoryCard"
import ProductCard from "../../Products/ProductCard/ProductCard"
import { StyledDashboard } from "./Dashboard.styled"

const Dashboard = () => {
    const categories = useSelector((state) => state.main.categories.all)
    const products = useSelector((state) => state.main.products.all)

    return (
        <StyledDashboard>
            <h1 className="title">Dashboard </h1>
            <div className="categories">
                <Link to="createCategory">Crear categoria nueva</Link>
                <div className="allCategories">
                    {!!categories &&
                        categories.map((c) => (
                            <CategoryCard key={c._id} category={c} />
                        ))}
                </div>
            </div>

            <div className="products">
                <Link to="createProduct">Crear producto nuevo</Link>
                <div className="allProducts">
                    {!!products &&
                        products.map((p) => (
                            <ProductCard key={p._id} product={p} />
                        ))}
                </div>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard
