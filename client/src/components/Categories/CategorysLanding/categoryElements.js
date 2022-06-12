import styled from "styled-components"

export const MainContainer = styled.section`
a{
    text-decoration: none;
}
    border-radius: 10px;
    height: 10rem;
    width: 20rem;
    margin: 1rem;
    background-color: ${({bgColor})=> bgColor};
    background-image: ${({img})=> `url(${img})`};
    background-size: 40%;
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
    font-size: 30px;
    color: white;
    height: 100%;
    width: 50%;
`