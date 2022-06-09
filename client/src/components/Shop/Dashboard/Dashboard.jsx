import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

const StyledDashboard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`

const Dashboard = () => {
    const { idShop } = useParams()

    return (
        <StyledDashboard>
            <h1>Dashboard local {idShop}</h1>
            <Link to="orders">Ver todos los pedidos</Link> <br />
            <Link to="products">Ver todos los productos</Link>
        </StyledDashboard>
    )
}

export default Dashboard
