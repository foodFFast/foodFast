import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CategoryCard from "../../Categories/CategoryCard/CategoryCard"
import ProductCard from "../../Products/ProductCard/ProductCard"
import { StyledDashboard } from "./Dashboard.styled"
import CategoryBar from "../../Landing/UbicationBar/UbicationBar"
import SearchBar from "../../searchBar"
import { useEffect } from "react"
import { searchCategory, searchProduct } from "../../../redux/actions/async"
import useDelete from "../../CustomHooks/useDelete"

const Dashboard = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.selectedTheme)
    const filterCategories = useSelector(
        (state) => state.main.categories.filtered
    )
    const filterProducts = useSelector((state) => state.main.products.filtered)

    const {handleDelete} = useDelete(dispatch)


    useEffect(() => {
        dispatch(searchProduct(""))
        dispatch(searchCategory(""))
    }, [dispatch])
    return (
        <StyledDashboard theme={theme}>
            <h1 className="title">Dashboard </h1>

            <div className="content">
                <div className="categories">
                    <div>
                        <CategoryBar />
                    </div>

                    <Link className="addBtn" to="createCategory">
                        Crear categoria nueva
                    </Link>
                    <div className="allCategories">
                        {filterCategories.length === 0 ? (
                            <div>Not results found</div>
                        ) : (
                            filterCategories.map((c) => (
                                <div key={c._id}>
                                    <CategoryCard
                                        key={c._id}
                                        category={c}
                                        url={`/categories/${c._id}`}
                                    />
                                    <button
                                        onClick={() =>
                                            handleDelete("categories", c._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>

                <div className="products">
                    <div>
                        <SearchBar />
                    </div>
                    <Link className="addBtn" to="createProduct">
                        Crear producto nuevo
                    </Link>
                    <div className="allProducts">
                        {filterProducts.length === 0 ? (
                            <div>Not results found</div>
                        ) : (
                            filterProducts.map((p) => (
                                <div key={p._id}>
                                    <ProductCard product={p} />
                                    <button
                                        onClick={() =>
                                            handleDelete("products", p._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard
