import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledShopCard = styled(Link)`
    display: grid;
    grid-template-columns: 15vw;

    padding: 1rem;
    min-height: 10vh;

    background-color: ${({ theme }) => theme.colors.background};
`

const ShopCard = ({ shop }) => {
    const { _id, name, description, img } = shop

    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <StyledShopCard theme={theme} key={_id} to={`/shop/${_id}`}>
            <span className="name">{name}</span>
            <img className="logo" src={img} alt="shop logo" />
            <span className="description">{description}</span>
        </StyledShopCard>
    )
}

export default ShopCard
