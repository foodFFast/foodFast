import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; 
import toast, { Toaster } from 'react-hot-toast';
import { IoFastFoodSharp } from "react-icons/io5"

import {SignUpContainer, SignUpDivContainer} from "./Logup.styled"

//valida los datos al ser ingresados y crea un objeto "errors" si falta o es incorrecto alguno.
function validate(input) {
  let errors = {};
  if(!input.name){
      errors.name = "Your name is required."
  }
  if (!input.email) {
    errors.email = "E-mail is required";
  } else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = "E-mail is invalid";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (input.password.length < 4) {
    errors.password = "contraseña demasiado corta";
  } else if (/[^A-z\s\d][\\\^]?/g.test(input.password)){
    errors.password = "no puede contener caracteres especiales."
  }

  if(!input.passwordConfirm) { 
    errors.passwordConfirm = "Debes confirmar tu contraseña"
  }else if (input.password !== input.passwordConfirm) { 
    errors.passwordConfirm = "Las contraseñas no coinciden"
  }
  return errors;
}

export default function SignUp() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "", 
    passwordConfirm: "",
  });
  const [errors, setErrors] = useState({});
  
  const navigate = useNavigate();

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const register = (e) => {
    e.preventDefault();

    if(Object.keys(errors).length > 0){ 
      return toast.error('Debes rellenar todos los campos de forma correcta.')
    }else{ //tremendo toast me mandé... :O
        toast.promise(axios.post("http://localhost:3001/api/v1/user", {
            name: input.name,
            email: input.email,
            password: input.password,
        }),{
            loading: "Registrando...",
            success: (resp)=>{
                setTimeout(()=>{
                    navigate("/login");
                },4000);
                return (<b>Registrado con éxito. Bienvenido {resp.data.name}!</b>)
            },
            error: <b>No se pudo registrar. Intente nuevamente.</b>
        },{
            style: { minWidth: '250px'}, success: {duration: 5000, icon: '🔥'}
        }
        );
    }
  };

  return (
    <SignUpDivContainer>
        <Toaster
          position="top-center"
          reverseOrder={false}/>

        <SignUpContainer>
            <IoFastFoodSharp/>
            <h1>Register</h1>
            <form onSubmit={register}>
                <label>Name</label>
                <input
                    onChange={handleInputChange}
                    value={input.name}
                    placeholder="Your name..."
                    type="text"
                    name="name"/>
                {errors.name && <p className="error">{errors.name}</p>}

                <label>Email</label>
                <input
                    onChange={handleInputChange}
                    value={input.email}
                    placeholder="E-mail..."
                    type="text"
                    name="email"/>
                {errors.email && <p className="error">{errors.email}</p>}

                <label>Password</label>
                <input
                    onChange={handleInputChange}
                    value={input.password}
                    placeholder="new password..."
                    type="password"
                    name="password"/>
                {errors.password && <p className="error">{errors.password}</p>} 

                <label>Confirm your password</label>
                <input
                    onChange={handleInputChange}
                    value={input.passwordConfirm}
                    placeholder="confirm password..."
                    type="password"
                    name="passwordConfirm"/> 
                    {errors.passwordConfirm && <p className="error">{errors.passwordConfirm}</p>}

                <input type="submit" value="Sign Up"/>
            </form>
        </SignUpContainer>
    </SignUpDivContainer>
  )
}