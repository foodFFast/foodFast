import { useSelector } from "react-redux"
import styled from "styled-components"

import { AiOutlineSearch } from "react-icons/ai"

import ShopCard from "./ShopCard"

const StyledShops = styled.div`
    display: grid;
    grid-template-columns: 20rem auto;

    .shopsContainer {
        display: flex;
        flex-wrap: wrap;

        justify-content: center;

        padding: 2rem;
        gap: 1rem;
    }
`

const StyledSideBar = styled.div`
    top: 0;
    position: sticky;
    max-height: 100vh;

    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 2px 0px 5px 5px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2rem;

    & > * {
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
            color: ${({ theme }) => theme.text.highContrast};
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
            /* padding: 0.5rem; */
        }

        .category {
            background-color: ${({ theme }) => theme.colors.main};
            padding: 0.5rem;

            cursor: pointer;
            border: none;
        }
    }
`

const Shops = () => {
    const theme = useSelector((state) => state.theme.selectedTheme)

    const shops = useSelector((state) => state.main.shops.all)
    const categories = useSelector((state) => state.main.categories.all)

    return (
        <StyledShops>
            <StyledSideBar theme={theme}>
                <span className="title">Locales</span>

                <div className="searchInput">
                    <input type="text" placeholder="Buscar por nombre" />
                    <AiOutlineSearch className="searchIcon" />
                </div>

                <div className="categories">
                    <span className="title">Filtrar por categoria</span>
                    <div className="container">
                        {categories.map((c) => (
                            <button
                                key={c._id}
                                onClick={() => console.log("A implementar")}
                                className="category"
                            >
                                {c.name}
                            </button>
                        ))}
                    </div>
                </div>
            </StyledSideBar>

            <div className="shopsContainer">
                {!!shops.length &&
                    shops.map((s) => (
                        <ShopCard key={s._id} shop={s}>
                            {s.name}
                        </ShopCard>
                    ))}
            </div>
        </StyledShops>
    )
}

export default Shops
