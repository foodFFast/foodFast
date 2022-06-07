import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

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
    Review
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
                <Link to="/">
                    <h1>Food Fast</h1>
                </Link>
                <Link to="/auth">Auth</Link>

                <Routes>
                    <Route path="/">
                        <Route index element={<Landing />} />
                        <Route path="shops" element={<Shops />} />
                        <Route path="categories" element={<Categories />} />
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

                    <Route path="tests">
                        <Route
                            index
                            element={
                                <>
                                    <h1>Redux Tests</h1>
                                    <MainTest />
                                    <ReduxTest />
                                </>
                            }
                        />
                        <Route path="main" element={<MainTest />} />
                        <Route path="redux" element={<ReduxTest />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
