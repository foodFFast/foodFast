import { useSelector } from "react-redux"

import { AiOutlineSearch } from "react-icons/ai"

import ShopCard from "./ShopCard"
import { StyledShops, StyledSideBar } from "./Styled"

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
                    shops.map((s) => <ShopCard key={s._id} shop={s} />)}
            </div>
        </StyledShops>
    )
}

export default Shops
