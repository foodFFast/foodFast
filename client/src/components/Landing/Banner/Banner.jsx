import React from "react"
import { StyledBanner } from "./Banner.styled"

const Banner = () => {
    return (
        <StyledBanner>
            <div className="blockDisplay" />

            <div className="ornament" />
            <h1 className="welcome">Everything you want in one place</h1>
            <img
                id={"mainImg"}
                src="https://www.minervafoods.com/wp-content/uploads/2017/02/como_fazer_hamburguer_caseiro_0.jpg"
                alt="burguerIMG"
            />
        </StyledBanner>
    )
}

export default Banner
