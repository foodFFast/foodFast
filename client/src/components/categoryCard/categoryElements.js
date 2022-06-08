import styled from "styled-components"

export const MainContainer = styled.section`
    border-radius: 10px;
    height: 10rem;
    width: 20rem;
    background-color: ${({bgColor})=> bgColor};
    background-image: url(${({img})=> img});
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: right;
    transition: background-size .3s linear;
    cursor: pointer;
    &:hover{
        background-size: 60%;
    }
`

export const NameCategory = styled.div`
    position: relative;
    top: 2.8rem;
    left: 1rem;
    font-size: 40px;
    color: white;
`