import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"

const randomImg =
    "https://orlandoinformer.com/wp-content/uploads/2014/07/ollivanders-wand-shop-universal-studios-florida-8211-oi.jpg"

const StyledShopCard = styled(Link)`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
        "img header"
        "img desc";

    width: 25rem;

    color: ${({ theme }) => theme.text.highContrast};
    background-color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.2);

    .header {
        grid-area: header;

        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: ${({ theme }) => theme.colors.main};

        .name {
            padding: 0.5rem;
            font-size: 1.5rem;
            text-align: center;
        }
    }

    .img {
        grid-area: img;
    }

    .description {
        grid-area: desc;
        padding: 0.5rem;
        color: ${({ theme }) => theme.text.soft};
    }
`

const StyledLogo = styled.div`
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: cover;
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
            <StyledLogo className="img" img={img || randomImg} />
            <span className="description">{description}</span>
        </StyledShopCard>
    )
}

export default ShopCard
