import styled from "styled-components"

export const StyledDashboard = styled.div`
    display: grid;
    grid-template-areas:
        "title      title    title"
        "categories products hours"
        "categories products admins";
    .title {
        grid-area: title;
    }
    .categories {
        grid-area: categories;
    }
    .products {
        grid-area: products;
    }
    .hours {
        grid-area: hours;
    }
    .admins {
        grid-area: admins;
    }
`