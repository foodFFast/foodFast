import React from 'react'
import { Link } from 'react-router-dom'

const ResetPass = () => {
  return (
            <form>
            <h1>Bienvenido a foodFast</h1>
            <br />
            <label>Email</label>
            <input type="email" name="email"/>
            <label>Password</label>
            <input type="password" name="password"/>
            <br /><br />
            <Link to="./ResetPass.jsx"><p>¿Olvidaste contraseña?</p></Link>
            

        </form>
    
  )
}

export default ResetPass