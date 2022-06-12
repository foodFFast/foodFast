import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CategoryCard from "../../Categories/CategoryCard/CategoryCard"
import ProductCard from "../../Products/ProductCard/ProductCard"
import { StyledDashboard } from "./Dashboard.styled"
import axios from "axios"
import CategoryBar from "../../Landing/UbicationBar/UbicationBar"
import SearchBar from "../../searchBar"
import {delete_category, delete_product} from "../../../redux/actions/sync"
import { useEffect } from "react"
import { searchCategory, searchProduct } from "../../../redux/actions/async"
const Dashboard = () => {

    const filterCategories = useSelector((state)=> state.main.categories.filtered);
    const filterProducts = useSelector((state)=> state.main.products.filtered);
    const dispatch = useDispatch(); 

    const handleDeleteCategory = (id)=> {
        axios.delete(`http://localhost:3001/api/v1/categories/${id}`)
        .then(() => console.log("borrado")).catch(err=> console.log(err));
        dispatch(delete_category(id))
    }

    const handleDeleteProduct = (id)=> {
        axios.delete(`http://localhost:3001/api/v1/products/${id}`)
        .then(() => console.log("borrado")).catch(err=> console.log(err));
        dispatch(delete_product(id))
    }
    useEffect(()=> {
        dispatch(searchProduct(""))
        dispatch(searchCategory(""))
    }, [])
    return (
        <StyledDashboard>
            <h1 className="title">Dashboard </h1>
            <div className="categories">
                <div>
                 <CategoryBar />
                </div>
               
                <Link to="createCategory">Crear categoria nueva</Link>
                <div className="allCategories">
                    {filterCategories.length ===0 ? <div>Not results found</div>:filterCategories.map(c=> 
                        <div>
                        <CategoryCard key={c._id} category={c} />
                        <button onClick={()=>handleDeleteCategory(c._id)}>Delete</button>
                    </div>
                    )}
                </div>
                
            </div>

            <div className="products">
                <div>
                    <SearchBar />           
                </div>
                <Link to="createProduct">Crear producto nuevo</Link>
                <div className="allProducts">
                         {filterProducts.length ===0 ? <div>Not results found</div>: filterProducts.map(p=>  <div>
                            <ProductCard key={p._id} product={p} />
                            <button onClick={()=>handleDeleteProduct(p._id)}>Delete</button>
                        </div>
                        ) }
                </div>
            </div>
        </StyledDashboard>
    )
}

export default Dashboard
