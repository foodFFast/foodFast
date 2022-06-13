import styled from "styled-components"

export const GlobalContainer = styled.section`
    display: flex;
    position: absolute;
    right: 0px;
    width: 30%;
    margin: 20px;
`

export const SearchIcon = styled.div`
    background-color: orange;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    border-radius: 10px;
    cursor: pointer;
    height: 2.5rem;
    margin-left: .4rem;
    transition: 0.4s;
    svg{
        color: white
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