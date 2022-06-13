import styled from "styled-components"

export const GlobalContainer = styled.section`
    display: flex;
    width: 50%;
    top: 55vh;
    left: 24vw;
`

export const SearchIcon = styled.div`
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    border-radius: 10px;
    cursor: pointer;
    svg {
        color: white;
        height: 70%;
        width: auto;
    }
    &:hover svg {
        transform: scale(1.3);
    }
`

export const SearchInput = styled.input`
    height: 2rem;
    width: 100%;
    padding: 2px;
    text-align: center;
    border-radius: 10px;
`