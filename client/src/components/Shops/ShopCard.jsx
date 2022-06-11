import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { GiRoundStar } from "react-icons/gi"

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
        padding: 0.5rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${({ theme }) => theme.colors.main};

        .name {
            font-size: 1.5rem;
        }

        .score {
            display: flex;
            align-items: center;
            gap: 0.25rem;
            justify-self: flex-end;
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
                <span className="score">
                    <GiRoundStar />
                    {score}/5
                </span>
            </div>
            <StyledLogo className="img" img={img || randomImg} />
            <span className="description">{description}</span>
        </StyledShopCard>
    )
}

export default ShopCard
