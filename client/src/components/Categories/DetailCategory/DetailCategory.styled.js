import styled from "styled-components"

const randomImg =
    "https://orlandoinformer.com/wp-content/uploads/2014/07/ollivanders-wand-shop-universal-studios-florida-8211-oi.jpg"

export const StyledCategoryDetail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .banner {
        width: 100%;
        height: 20rem;

        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${randomImg});
        background-position: center;
        background-size: cover;

        display: flex;
        align-items: center;
        justify-content: center;

        color: ${({ theme }) => theme.text.light};
        font-size: 3rem;
    }

    .products {
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        gap: 0.25rem;
    }
`
