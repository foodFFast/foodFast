import styled from "styled-components"; 

export const GlobalContainer = styled.section`
    display: flex;
    height: 100%;
    width: 100%;
    section {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const FilterContainer = styled.section`
    width: 35%;
    div {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg {
            height: 50%;
            width: auto;
        }
    }
`
//===================== Modal elements Styles =====================
export const IconClose = styled.div`
    height: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    svg{
        height: 100%;
        width: auto;
    }
`

export const ListContainer = styled.div`
    margin-bottom: 2rem;
`

export const MyH4 = styled.h4`
    color: black;
    font-family: 'Roboto Mono', monospace;
`
export const ButtonContainer = styled.div`
    height: 20%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`
export const FilterButton = styled.button`
    background-color: #00ff00;
    color: white;
    height: 50%;
    width: 30%;
    border: 0px;
    font-size: 1.5rem;
    border-radius: 1rem;
`

//========================================================
export const SearchContainer = styled.section`
    width: 35%;
    section {
        width: 80%;
        height: 90%;
    }
`
export const UserContainer = styled.section`
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    div {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
        width: 50%;
        svg {
            cursor: pointer;
            height: 60%;
            width: auto;
            &:hover {
                color: green
            }
        }
    }
`