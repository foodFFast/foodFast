import styled from "styled-components"; 

export const GlobalContainer = styled.section`
    height: max-content;
    width: 100%;
    background-color: #c9933e;
`
export const FilterContainer = styled.div`
    height: 10vh;
    width: 100%;
    background-color: white;
`
export const CardsContainer = styled.section`
    min-height: 100vh;
    height: max-content;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #c9933e;
`

export const CardContainer = styled.section`
    margin: 1rem;
    width: 15%;
    height: 40vh;
    border: 3px solid black;
    border-radius: 10px;
    background-color: white;
`

export const TitleDiv = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'Concert One', cursive;
    font-size: 1.2rem;
    text-transform: uppercase;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        height: 100%;
        width: auto;
        max-width: 90%;
        border-radius: 1rem;
        cursor: pointer;
        &:hover{
            transform: scale(1.1);
        }
    }
`

export const FooterContainer = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
`
export const PriceContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-family: 'Bangers', cursive;
`
export const ButtonsContainer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{ 
        height: 100%;
    }
    svg{
        width: auto;
        color: black;
        cursor: pointer;
        &:hover{
            transform: scale(1.2);
        }
    }
    #car{
        height: 70%;
        width: auto;
    }
    #details svg{
        height: 80%;
        width: auto;
    }
   
`