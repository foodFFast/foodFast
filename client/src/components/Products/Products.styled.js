import styled from "styled-components"

export const StyledProducts = styled.div`
    display: flex;

    .productsContainer {
        display: grid;
        grid-template-columns: repeat(3, 1fr);

        padding: 2rem;
        gap: 1rem;

        width: 100%;
        overflow-y: auto;
    }
`

export const StyledSideBar = styled.div`
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 2px 0px 5px 5px rgba(0, 0, 0, 0.2);
    min-width: 15rem;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;

    &,
    & input,
    & button {
        color: ${({ theme }) => theme.text.highContrast};
    }

    & > div {
        padding: 0 1rem;
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 2rem;
        text-align: center;
        padding: 1rem;
    }

    .searchInput {
        flex-direction: row;
        align-items: center;

        input {
            background-color: ${({ theme }) => theme.colors.background};
            border: none;
            border-bottom: 1px solid ${({ theme }) => theme.text.soft};
            padding: 0.25rem;
            width: 100%;

            &:focus {
                outline: none;
                border-color: ${({ theme }) => theme.colors.main};
            }
        }

        .searchIcon {
            font-size: 2rem;
            color: ${({ theme }) => theme.colors.main};
        }
    }

    .categories {
        padding: 0;

        .title {
            font-size: 1.5rem;
            padding: 0.5rem;
        }

        .container {
            display: flex;
            flex-direction: column;
            gap: 0.25rem;
        }

        .category {
            background-color: ${({ theme }) => theme.colors.main};
            padding: 0.5rem;

            cursor: pointer;
            border: none;
        }
    }
`
