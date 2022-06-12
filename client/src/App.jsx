import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import "./App.module.scss"
import { fetchAllCategories, fetchAllProducts } from "./redux/actions/async"
import { useDispatch } from "react-redux"

<<<<<<< HEAD
import CategoriesForm from "./components/categoryForm"
import ProductForm from "./components/productForm"
import CategoryFormV2 from "./components/categoryFormV2"
import DetailProduct from "./components/DetailProduct"
import DisplayProducts from "./components/DisplayProducts"
=======
import {
    Auth,
    AxiosTest,
    Categories,
    CategoriesTest,
    CategoryForm,
    Dashboard,
    DetailCategory,
    DetailOrder,
    DetailProduct,
    DetailReview,
    Landing,
    MainTest,
    NavBar,
    Orders,
    ProductForm,
    Products,
    Profile,
    ReduxTest,
    Reviews
} from "./components"
>>>>>>> 9e9eabb8da72d141756611314adb06fe5cb16f45

const ScrollToTop = (props) => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location])

    return <>{props.children}</>
}

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchAllCategories())
    }, [dispatch])

    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop>
                    <div style={{ zIndex: 10, position: "sticky", top: 0 }}>
                        <NavBar />
                    </div>

                    <Routes>
                        <Route path="/" element={<Landing />} />

                        <Route path="dashboard">
                            <Route index element={<Dashboard />} />
                            <Route
                                path="createProduct"
                                element={<ProductForm />}
                            />
                            <Route
                                path="createCategory"
                                element={<CategoryForm />}
                            />
                        </Route>

                        <Route path="products">
                            <Route index element={<Products />} />
                            <Route
                                path=":idProduct"
                                element={<DetailProduct />}
                            />
                        </Route>

                        <Route path="categories">
                            <Route index element={<Categories />} />
                            <Route
                                path=":idCategory"
                                element={<DetailCategory />}
                            />
                        </Route>

                        <Route path="/auth" element={<Auth />} />

                        <Route path="user/:idUser">
                            <Route index element={<Profile />} />
                            <Route path="orders">
                                <Route index element={<Orders />} />
                                <Route
                                    path=":idOrder"
                                    element={<DetailOrder />}
                                />
                            </Route>
                            <Route path="reviews">
                                <Route index element={<Reviews />} />
                                <Route
                                    path=":idReview"
                                    element={<DetailReview />}
                                />
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
