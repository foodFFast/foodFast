import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        scrollbar-color: ${({ theme }) => theme.colors.main} lightgray;
    }

    .App {
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        & > div {
            overflow: auto;
        }
    }
`

export default GlobalStyle
