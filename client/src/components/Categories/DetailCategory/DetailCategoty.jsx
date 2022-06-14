import { Link, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect} from "react"
import { fetchProductsByCat } from "../../../redux/actions/async"
import { StyledCategoryDetail } from "./DetailCategory.styled"
import ProductCard from "../../Products/ProductCard/ProductCard"
import {clean_categories, clean_products} from "../../../redux/actions/sync"

const DetailCategory = () => {
    const { idCategory } = useParams()

    const dispatch = useDispatch()

    const theme = useSelector((state) => state.theme.selectedTheme)
    const category = useSelector((state) =>
        state.main.categories.all.find((c) => c._id === idCategory)
    )
    const filteredProducts = useSelector(
        (state) => state.main.products.filtered
    )
    
    const products = () => {
        if(category) {  
            let currentCategory = category.name; 
            if (filteredProducts.length !== 0) {
                let correctProducts = filteredProducts.filter(el=> el.categories && el.categories.includes(currentCategory))
                return correctProducts
            }
            return []
        }
        return []
    }
    useEffect(() => {
        dispatch(fetchProductsByCat(category.name))
    }, [dispatch, category])

    useEffect(()=> {
        return ()=> { dispatch(clean_categories()); dispatch(clean_products())}
       })

    return !!category ? (
        <StyledCategoryDetail theme={theme} img={category.img}>
            <div className="banner">{category.name}</div>
            <div className="products">
                {products().length !== 0 && products().map((p) => (
                    <ProductCard key={p._id} product={p} />
                ))}
            </div>
            {/* <Link to="products">Ver todos los productos del local</Link> <br /> */}
            <Link to="reviews">Ver todas las reseñas del local (in progress)</Link> <br />
            {/* <Link to="dashboard">Ir al dashboard</Link> */}
        </StyledCategoryDetail>
    ) : (
        <h1>Loading...</h1>
    )
}

export default DetailCategory