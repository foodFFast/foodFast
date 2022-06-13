import React, {useState} from 'react'
import { Link } from 'react-router-dom'
 import "../NavBar/styles/_auth.scss"
 import { useDispatch } from 'react-redux'
  import {GiArchiveRegister}  from 'react-icons/fa';
import { postLogin } from '../../redux/actions/async';






const Login = () => {

 const [input, setInput]=useState({
   name:"",
   password:""
 })

  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(postLogin(input))
  
  }
  const handleChange=(e)=>{
 
    setInput({
      [e.target.name]:e.target.value
    })
    
  
  }

  return (
    <div className=" auth_fondo">
    <div  className="auth_login">
          <form onSubmit={handleSubmit}>
          <h3 className='auth_title'>Bienvenido a foodFast</h3>

          <br />

          <label className='auth_label'>Email</label>
          <input 
          onChange={handleChange}
          className='auth_input' 
          type="email"
           name="email"
           value={input.name}
           placeholder='email'
           />

          <label className='auth_label'>Password</label>
          <input 
           onChange={handleChange}
          className='auth_input'
          type="password"
          name="password"
          value={input.password}
          placeholder='password'
          />
          
          <br /><br />

          <input type="submit" value="Entrar"/>

          
          <Link to="./ResetPass.jsx">
          
        

            </Link>
          <Link to="./Register.jsx">
            <button className='auth_register'>Registrarse</button>
          </Link>

          <div 
             className="google-btn"
           >
             <div className="google-icon-wrapper">
                <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
              </div>
                    <p className="btn-text">
                       <b>Sign in with google</b>
                   </p>
              </div>



</form>
</div>
</div>
  )
}

export default Login
