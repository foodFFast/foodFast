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

export default function NavBar() {
    const [showNavbar, setShowNavbar] = useState(false)

    return (
        <GlobalContainer>
            <ShowButton
                onClick={() => setShowNavbar(true)}
                isShowing={showNavbar}
            >
                <GiHamburgerMenu id={"HambugerMenu"} />
            </ShowButton>

            <NavBarContainer isShowing={showNavbar}>
                <ShowButton
                    onClick={() => setShowNavbar(false)}
                    isShowing={showNavbar}
                >
                    <AiFillCloseCircle id={"close"} />
                </ShowButton>
                <MainIconContainer>
                    <IoFastFoodSharp />
                    <Title>Fast Food APP</Title>
                </MainIconContainer>

                <ButtonsContainer>
                    <LoginRegisterButton>
                        <FaUserAlt />
                        Login
                    </LoginRegisterButton>

                    <LoginRegisterButton>
                        <GiArchiveRegister />
                        Register
                    </LoginRegisterButton>
                </ButtonsContainer>

                <ListRoutes>
                    <hr />
                    <h3>CONSUMER</h3>
                    <Link to="/"><RouteItem>Home</RouteItem></Link>
                    <RouteItem>Categories</RouteItem>
                    <RouteItem>My orders</RouteItem>
                    <RouteItem>Oferts</RouteItem>
                    <hr />

                    <hr />
                    <h3>SELLER</h3>
                    <RouteItem>Register a restaurant</RouteItem>
                    <RouteItem>Create new product</RouteItem>
                    <RouteItem>Contact</RouteItem>
                    <hr />
                </ListRoutes>
            </NavBarContainer>
        </GlobalContainer>
    )
}
