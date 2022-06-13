import React from 'react'
import {Link} from "react-router-dom"
import "../navBar/styles/_auth.scss"

const Register = () => {
  return (
    <div className='auth_register'>
        <form>
            <h1>Bienvenido a foodFast</h1>
            <br />
            <label>Name</label>
            <input type="text" name="text"/>
            <label>Password</label>
            <input type="password" name="password"/>
            <label>Email</label>
            <input type="email" name="email"/>
            <label>Password</label>
            <input type="password" name="password"/>
            <br /><br />
            <Link to="./"><p>¿Olvidaste contraseña?</p></Link>
           
            
        </form>
        </div>
  )
}

export default Register