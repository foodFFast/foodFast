import styled from "styled-components"

export const GlobalContainer = styled.section`
    z-index: 2;
`
export const ShowButton = styled.div`
    right: ${({ isShowing }) => (isShowing ? "10px" : "95vw")};
    height: 2.5rem;
    display: flex;
    justify-content: ${({ isShowing }) => (isShowing ? "flex-end" : "center")};
    align-items: center;
    position: absolute;
    top: 10px;
    svg {
        height: 70%;
        width: auto;
        cursor: pointer;
        &:hover {
            transform: scale(1.2);
        }
    }
    #HambugerMenu {
        display: ${({ isShowing }) => isShowing && "none"};
    }
`
export const NavBarContainer = styled.section`
    * {
        margin: 0px;
        padding: 0px;
    }
    background-color: ${({ theme }) => theme.colors.background};
    border-right: 4px solid #00a726;
    width: 30%;
    height: 100vh;
    position: absolute;
    top: 0px;
    transition: left 1.5s ease-out;
    left: ${({ isShowing }) => (isShowing ? "0px" : "-50%")};
    overflow-y: auto;
`
export const MainIconContainer = styled.div`
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    svg {
        height: 70%;
        width: auto;
        color: ${({ theme }) => theme.text.highContrast};
    }
`

export const Title = styled.h1`
    color: ${({ theme }) => theme.text.highContrast};
    font-size: 25px;
`
export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.background};
    border-bottom: 1px solid black;
    margin-bottom: 1.5rem;
`
export const LoginRegisterButton = styled.button`
    height: 70%;
    width: 40%;
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.colors.background};
    border: 1px solid orange;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.main};
    &:hover {
        background-color: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.text.highContrast};
    }
`
export const ListRoutes = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
        text-decoration: none;
        color: black;
        width: 100%;
    }
`

export const RouteItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid red;
    border-top: 1px solid red;
    list-style: none;
    height: 3em;
    &:hover {
        cursor: pointer;
        outline: 3px solid red;
        outline: 3px solid red;
    }
`
