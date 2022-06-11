import { Link } from "react-router-dom"
import styled from "styled-components"

export const StyledProductCard = styled(Link)`
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.text.highContrast};
    text-decoration: none;

    display: grid;
    grid-template-columns: 2fr 4fr 1fr;
    grid-template-areas:
        "img header addBtn"
        "img desc   addBtn";
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

        & > * {
            display: flex;
            align-items: center;
        }

        .name {
            font-size: 2rem;
        }
        .price {
            font-size: 1.5rem;
        }
    }

    .desc {
        grid-area: desc;
        padding: 0.25rem;
    }

    .addBtn {
        grid-area: addBtn;

        border: none;

        background-color: ${({ theme }) => theme.colors.main};
        display: flex;
        align-items: center;
        justify-content: center;

        &:disabled {
            background-color: ${({ theme }) => theme.text.soft};
            color: ${({ theme }) => theme.text.light};
        }
    }
`