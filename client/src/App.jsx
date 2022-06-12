import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import {
    MainTest,
    ReduxTest,
    Landing,
    Categories,
    Shops,
    Auth,
    Profile,
    Shop,
    Products,
    Reviews,
    Dashboard,
    Orders,
    Product,
    Order,
    Review,
    AxiosTest,
    NavBar,
    SingleCat,
    CategoriesTest
} from "./components/index"
import "./App.module.scss"
import {
    fetchAllCategories,
    fetchAllProducts,
    fetchAllShops
} from "./redux/actions/async"
import { useDispatch } from "react-redux"

import CategoriesForm from "./components/categoryForm"
import ProductForm from "./components/productForm"
import CategoryFormV2 from "./components/categoryFormV2"
import DetailProduct from "./components/DetailProduct"
import DisplayProducts from "./components/DisplayProducts"

const ScrollToTop = (props) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return <>{props.children}</>
}

const productsNestedRoutes = () => (
    <Route path="products">
        <Route index element={<Products />} />
        <Route path=":idProduct" element={<Product />} />
    </Route>
)

const ordersNestedRoutes = () => (
    <Route path="orders">
        <Route index element={<Orders />} />
        <Route path=":idOrder" element={<Order />} />
    </Route>
)

const reviewsNestedRoutes = () => (
    <Route path="reviews">
        <Route index element={<Reviews />} />
        <Route path=":idReview" element={<Review />} />
    </Route>
)

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllShops())
        dispatch(fetchAllProducts())
        dispatch(fetchAllCategories())
    }, [dispatch])

    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop>
                    {/* <Link to="/">
                    <h1>Food Fast</h1>
                    </Link>
                    <Link to="/auth">Auth</Link> */}

                    <div style={{ zIndex: 10, position: "sticky", top: 0 }}>
                        <NavBar />
                    </div>

                    <Routes>
                        <Route path="/">
                            <Route index element={<Landing />} />
                            <Route path="shops" element={<Shops />} />
                            <Route path="categories">
                                <Route index element={<Categories />} />
                                <Route
                                    path=":idCategory"
                                    element={<SingleCat />}
                                />
                            </Route>
                             <Route path="createCategories/:id" element={<CategoriesForm />}/>
                            <Route path="createProduct" element={<ProductForm />}/>
                            <Route path="createCategory" element={<CategoryFormV2 />} />
                            <Route path="product/:productID" element={<DetailProduct/>}/>
                            <Route path="products" element={<DisplayProducts />}/>
                        </Route>

                        <Route path="/auth" element={<Auth />} />

                        <Route path="user/:idUser">
                            <Route index element={<Profile />} />
                            {ordersNestedRoutes()}
                            {reviewsNestedRoutes()}
                        </Route>

                        <Route path="shop/:idShop">
                            <Route index element={<Shop />} />
                            {productsNestedRoutes()}
                            {reviewsNestedRoutes()}
                            <Route path="dashboard">
                                <Route index element={<Dashboard />} />
                                {ordersNestedRoutes()}
                                {productsNestedRoutes()}
                            </Route>
                        </Route>

                        <Route
                            path="tests"
                            element={
                                <>
                                    <h1>Redux Tests</h1>
                                    <MainTest />
                                    <ReduxTest />
                                    <AxiosTest />
                                    <CategoriesTest />
                                </>
                            }
                        />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    )
}

export default App
