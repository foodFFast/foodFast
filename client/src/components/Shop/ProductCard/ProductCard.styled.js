import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledProductCard = styled(Link)`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.text.highContrast};
    text-decoration: none;

    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-areas:
        "img header"
        "img desc";
    gap: 1rem;

    min-width: 40rem;

    .img {
        grid-area: img;
        background-image: url(${({ img }) => img});
        background-position: center;
        background-size: cover;
    }

    .header {
        grid-area: header;

        padding: 0.25rem;
        display: flex;
        justify-content: space-between;
        font-size: 2rem;
    }

    .desc {
        grid-area: desc;
    }
`
