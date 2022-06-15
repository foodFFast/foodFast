import styled from "styled-components";

export const SignUpDivContainer = styled.div`
margin: 0; padding: 0;
background-image: url("https://thumbs.dreamstime.com/b/greek-food-background-traditional-different-greek-dishes-set-greek-food-background-traditional-different-greek-dishes-set-top-view-178761927.jpg");
background-size: cover;
width: 100%;
height: 100vw;
font-family: sans-serif;
  @media (max-width: 455px) {
    height: 125vh;
    width: 125%;
    object-fit: fill;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SignUpContainer = styled.div`
width: 320px;
height: fit-content;
background: rgb(85, 49, 3);
color: #fff;
position: absolute;
top: 50%; left: 50%;
transform: translate(-50%, -50%);
box-sizing: border-box;
border-radius: 5px;
padding: 50px 25px 15px;
box-shadow: 6px 6px 6px #111;
svg{
    width: 90px; height: 90px;
    position: absolute;
    top: -50px;
    left: calc(50% - 50px);
    background-color: rgb(206, 151, 80); color: #000;
    border-radius: 50%;
    padding: 5px;
    border: 0px;
}
h1{
    margin: 4px;
    padding: 6px 0 20px;
    text-align: center;
    font-size: 24px;
}
label{
    margin: 0; padding: 0;
    font-weight: bold;
    display: block;
}
input{
    width: 100%;
    margin-bottom: 15px;
}
input[type="text"], input[type="password"]{
    color: #ddd;
    border: 0;
    border-bottom: 1px solid white;
    background: transparent;
    outline: none;
    height: 37px;
    font-size: 16px;
}
input[type="submit"]{
    color: #000;
    border: 0;
    outline: none;
    background: rgb(206, 151, 80);
    height: 35px;
    font-size: 18px;
    font-weight: bold;
    border-radius: 20px;
    margin: 10px 0 10px;
    transition: box-shadow .3s ease;
    transition: .3s;
    &:hover{
        background: #000;
        color: #ede;
        box-shadow: 0 0 6px #fff;
    }
}
a{
    text-decoration: none;
    font-size: 14px;
    line-height: 25px;
    color: darkgrey;
    &:hover{
        color: white;
    }
}
p{
    color: darkred;
    font-size: 14px;
    margin: 0; padding: 0;
    background: rgb(216, 130, 130);
    border-radius: 3px;
    display: flex; justify-content: center;
}


  @media (max-width: 455px) {
    form {
      width: 20rem;
    }
    input {
      width: 180px;
    }
  }
`;