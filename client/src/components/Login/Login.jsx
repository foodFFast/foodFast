import React from "react";
import { Container, LoginBox, LoginIcon } from "./Login.styled";
import { IoFastFoodSharp } from "react-icons/io5"

export default function Login(){
    return(
        <Container>
            <LoginBox>
                <IoFastFoodSharp/>
                <h1>Login here</h1>
                <form>
                    <label for="username">Username (e-mail)</label>
                    <input type="text" placeholder="Enter a e-mail..."/>
                    <br />
                    <label for="password">Password</label>
                    <input type="password" placeholder="Enter your password..."/>

                    <input type="submit" value="Log In"/>

                    <a href="">Forgot your password?</a> <br />
                    <a href="">No registered yet? Sign Up now!</a>
                </form>
            </LoginBox>
        </Container>
    )
}