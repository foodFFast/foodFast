import React, { useState } from "react"
import { NavLink } from "react-router-dom"
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
} from "./NavBar.styled"
import { IoFastFoodSharp } from "react-icons/io5"
import { FaUserAlt } from "react-icons/fa"
import { GiHamburgerMenu, GiArchiveRegister } from "react-icons/gi"
import { AiFillCloseCircle } from "react-icons/ai"

import { useDispatch, useSelector } from "react-redux"
import { switchTheme } from "../../redux/actions/sync"

const NavBar = () => {
    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme.selectedTheme)

    const [showNavbar, setShowNavbar] = useState(false)
    const handleSelectRoute = () => {
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
                    <NavLink to="/" onClick={handleSelectRoute}>
                        <RouteItem>Home</RouteItem>
                    </NavLink>

                    <NavLink to="/products" onClick={handleSelectRoute}>
                        <RouteItem>Products</RouteItem>
                    </NavLink>


                    <RouteItem>My orders</RouteItem>
                    <RouteItem>Oferts</RouteItem>
                    <RouteItem>Contact</RouteItem>
                    <hr />

                    <hr />
                    <h3>SELLER</h3>
                    <NavLink to="/dashboard" onClick={handleSelectRoute}>
                        <RouteItem onClick={handleSelectRoute}>
                            DashBoard
                        </RouteItem>
                    </NavLink>

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

export default NavBar