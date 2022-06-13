import {body} from "express-validator"
import {validarCampos} from './validar-campo.js'

export const registerValidation = [
    
    body("name","El nombre es obligatorio")
    .not()
    .isEmpty(),
    body('name', "el nombre debe tener un minimo de 4 caracteres")
    .isLength({ min: 4 }),
    body("email", "Ingrese un email válido")
    .trim()
    .isEmail()
    .normalizeEmail(),
    body('password', 'Contraseña mínimo 4 carácteres')
    .trim()
    .isLength({ min: 4 }),
    body('password', 'Credenciales invalidad')
    .custom((value, { req }) => {
        if (value !== req.body.repassword) {
            throw new Error("No coinciden las contraseñas");
        }
        return value;
    }),
    validarCampos
]

export const loginValidation = [
    body('email', "enter a valid email")
    .trim()
    .isEmail()
    .normalizeEmail(),
    body('password', "enter a minimum of 4 characters")
    .trim()
    .isLength({ min: 4 }),
    validarCampos
]



