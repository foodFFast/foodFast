import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledShopCard = styled(Link)`
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

export const StyledLogo = styled.div`
    background-image: url(${({ img }) => img});
    background-position: center;
    background-size: cover;
`
