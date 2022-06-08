import { BrowserRouter, Routes, Route } from "react-router-dom"

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
    SingleCat
} from "./components/index"

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
    return (
        <div className="App">
            <BrowserRouter>
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
                            <Route path=":idCategory" element={<SingleCat />} />
                        </Route>
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
                            </>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
