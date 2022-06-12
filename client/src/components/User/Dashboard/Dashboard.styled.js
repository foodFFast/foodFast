import styled from "styled-components"

export const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        text-align: center;
        background-color: ${({ theme }) => theme.colors.main};
        padding: 1rem;
    }

    .content {
        display: flex;
        gap: 1rem;
        justify-content: center;
        overflow: hidden;

        & > div {
            background-color: ${({ theme }) => theme.colors.background};
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 1rem;

            & > .addBtn {
                color: ${({ theme }) => theme.text.light};
                background-color: ${({ theme }) => theme.colors.main};

                padding: 1rem;
                text-decoration: none;
                font-size: 1.5rem;
            }
        }
    }

    .categories {
        display: flex;
        flex-direction: column;

        .allCategories {
            overflow-y: auto;
        }
    }

    .products {
        display: flex;
        flex-direction: column;

        .allProducts {
            overflow-y: auto;
        }
    }
`
