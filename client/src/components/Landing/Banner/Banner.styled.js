import styled from "styled-components"

export const StyledBanner = styled.div`
    /* position: relative; */
    /* display: flex; */

    a {
        text-decoration: none;
        width: 100%;
        color: black;
    }

    .ornament {
        height: 80vh;
        position: absolute;
        z-index: -1;
        width: 100%;
        background: linear-gradient( #644005, #c9933e);
        clip-path: polygon(
            0% 0%,
            100% 0,
            100% 65%,
            73% 52%,
            51% 62%,
            24% 55%,
            0 65%
        );
    }
    .welcome {
        color: white;
        text-align: center;
        font-size: 70px;
        padding-top: 20vh;
        z-index: 1;
    }

    #mainImg {
        width: 100%;
        height: auto;
        z-index: -2;
        position: absolute;
        top: 20px;
    }

    .categoryContainer {
        display: flex;
        flex-wrap: wrap;
        margin-top: 35vh;
        justify-content: space-around;
    }
`
