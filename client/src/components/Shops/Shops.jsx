import { useSelector } from "react-redux"
import styled from "styled-components"
import ShopCard from "./ShopCard"

const StyledShops = styled.div`
    .shopsContainer {
        display: flex;
        flex-wrap: wrap;

        justify-content: center;

        gap: 1rem;
    }
`

const Shops = () => {
    const shops = useSelector((state) => state.main.shops.all)

    return (
        <StyledShops>
            <h1>Locales</h1>
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
