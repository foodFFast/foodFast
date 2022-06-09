import { useState } from "react";


export default function useForm(initialForm, validateForm) {

    const [form, setForm] = useState(initialForm); 
    const [errors, setErrors] = useState({});
    const [isAvailable, setIsAvailable] = useState(false)
    
    const handleChange = (e)=> {

        const {name, value} = e.target; 

            setForm({...form, [name]: value})

        // La función validateForm devuelve un objeto
        let currentErrors = validateForm({...form, [name]: value})
        // Que después seteo en mi estado de errores
        setErrors(currentErrors)
        if(name === "stock") {
            console.log(value)
            console.log(isAvailable)
            if (value > 0) setIsAvailable(true)
            else setIsAvailable(false)   
        }

        
    }

    return {
        form,
        handleChange,
        isAvailable,
        errors,
        setForm
    }

}