import React, { useState } from "react"
import { Link } from "react-router-dom"
import {
    GlobalContainer,
    MainIconContainer,
    NavBarContainer,
    LoginRegisterButton,
    ListRoutes,
    RouteItem,
    Title,
    ButtonsContainer,
    ShowButton
} from "./navBarElements"
import { IoFastFoodSharp } from "react-icons/io5"
import { FaUserAlt } from "react-icons/fa"
import { GiHamburgerMenu, GiArchiveRegister } from "react-icons/gi"
import { AiFillCloseCircle } from "react-icons/ai"

import { useDispatch, useSelector } from "react-redux"
import { switchTheme } from "../../redux/actions/sync"

export default function NavBar() {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.selectedTheme)

    const [showNavbar, setShowNavbar] = useState(false)
    
    const handleSelectRoute = ()=> {
        setShowNavbar(false)
    }

    return (
        <GlobalContainer>
            <ShowButton
                onClick={() => setShowNavbar(true)}
                isShowing={showNavbar}
            >
                <GiHamburgerMenu id={"HambugerMenu"} />
            </ShowButton>

            <NavBarContainer theme={theme} isShowing={showNavbar}>
                <ShowButton
                    onClick={() => setShowNavbar(false)}
                    isShowing={showNavbar}
                >
                    <AiFillCloseCircle id={"close"} />
                </ShowButton>
                <MainIconContainer theme={theme}>
                    <IoFastFoodSharp />
                    <Title theme={theme}>Fast Food APP</Title>
                </MainIconContainer>

                <ButtonsContainer theme={theme}>
                    <LoginRegisterButton theme={theme}>
                        <FaUserAlt />
                        Login
                    </LoginRegisterButton>

                    <LoginRegisterButton theme={theme}>
                        <GiArchiveRegister />
                        Register
                    </LoginRegisterButton>
                </ButtonsContainer>

                <ListRoutes>
                    <hr />
                    <h3>CONSUMER</h3>
                    <Link to="/">
                        <RouteItem onClick={handleSelectRoute}>Home</RouteItem>
                    </Link>
                    <RouteItem onClick={handleSelectRoute}>Categories</RouteItem>
                    <RouteItem>My orders</RouteItem>
                    <RouteItem>Oferts</RouteItem>
                    <hr />

                    <hr />
                    <h3>SELLER</h3>
                    
                    <Link to="/createStore">
                        <RouteItem onClick={handleSelectRoute}>Register a restaurant</RouteItem>
                    </Link>

                    <Link to={"/createProduct"}>
                         <RouteItem onClick={handleSelectRoute}>Create new product</RouteItem>
                    </Link>
                    <RouteItem>Contact</RouteItem>
                    <hr />
                </ListRoutes>

                <button onClick={() => dispatch(switchTheme())}>
                    Switch to {theme.name === "light" ? "dark" : "light"} theme
                </button>
            </NavBarContainer>
        </GlobalContainer>
    )
}
