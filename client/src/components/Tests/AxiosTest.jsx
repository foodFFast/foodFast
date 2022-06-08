import { useDispatch, useSelector } from "react-redux"
import {
    fetchAllCategories,
    fetchAllProducts,
    fetchProductsByCat
} from "../../redux/actions/async"
import { resetProducts } from "../../redux/actions/sync"

const AxiosTest = () => {
    const dispatch = useDispatch()
    const categories = useSelector((state) => state.main.allCategories)
    const allProducts = useSelector((state) => state.main.allProducts)
    const filteredProducts = useSelector((state) => state.main.filteredProducts)

    return (
        <div>
            <h1>AxiosTest</h1>

            <button onClick={() => dispatch(fetchAllCategories())}>
                Fetch Categories
            </button>

            <button onClick={() => dispatch(fetchAllProducts())}>
                Fetch All Products
            </button>

            <button onClick={() => dispatch(resetProducts())}>
                Reset Products
            </button>

            {!!categories.length && (
                <div>
                    <h3>Categories</h3>
                    {categories.map((cat) => (
                        <button
                            onClick={() =>
                                dispatch(
                                    fetchProductsByCat(cat.name.toLowerCase())
                                )
                            }
                            key={cat._id}
                        >
                            {cat.name}
                        </button>
                    ))}
                </div>
            )}

            {!!allProducts.length && (
                <div>
                    <h3>Todos los Productos</h3>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        {allProducts.map((prod) => (
                            <span key={prod._id}>{prod.name}</span>
                        ))}
                    </div>
                </div>
            )}
            {!!filteredProducts.length && (
                <div>
                    <h3>Productos Filtrados</h3>
                    <div style={{ display: "flex", gap: "1rem" }}>
                        {filteredProducts.map((prod) => (
                            <div key={prod._id}>{prod.name}</div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default AxiosTest
