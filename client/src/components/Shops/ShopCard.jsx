import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"

const randomImg =
    "https://orlandoinformer.com/wp-content/uploads/2014/07/ollivanders-wand-shop-universal-studios-florida-8211-oi.jpg"

const StyledShopCard = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 300px;

    color: ${({ theme }) => theme.text.highContrast};
    background-color: ${({ theme }) => theme.colors.background};
    text-decoration: none;

    .header {
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: ${({ theme }) => theme.colors.main};
        /* color: ${({ theme }) => theme.text.light}; */

        .name {
            grid-area: name;
            padding: 0.5rem;
            font-size: 1.5rem;
            text-align: center;
        }

        .score {
            grid-area: score;
        }
    }

    .img {
        grid-area: img;
        width: 100%;
    }

    .description {
        grid-area: desc;
        padding: 0.25rem;
        color: ${({ theme }) => theme.text.soft};
    }
`

const ShopCard = ({ shop }) => {
    const { _id, name, description, img, score } = shop

    const theme = useSelector((state) => state.theme.selectedTheme)

    return (
        <StyledShopCard theme={theme} key={_id} to={`/shop/${_id}`}>
            <div className="header">
                <span className="name">{name}</span>
                <span className="score">{score}/5</span>
            </div>
            <img className="img" src={img || randomImg} alt="shop img" />
            <span className="description">{description}</span>
        </StyledShopCard>
    )
}

export default ShopCard
