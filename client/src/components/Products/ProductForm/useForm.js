import { useState } from "react";
import axios from "axios"

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
            if (value > 0) setIsAvailable(true)
            else setIsAvailable(false)   
        }    }

    const handleSubmit = async (file, setFile)=> {
        if(!file) alert("You must be choose a file")
        else {  
          const formdata = new FormData()
          formdata.append('imageProduct', file)

          fetch("http://localhost:3001/api/v1/products/image", {
                method: 'POST',
                body: formdata
            }).then(res=> res.json())
            .then(json=> 
                axios.post('http://localhost:3001/api/v1/products', {
                name: form.name,
                description: form.description, 
                img: json.img,
                price: form.price,
                categories: form.categories,
                stock: form.stock
            })
              ).then(res=> console.log("Xd")).catch(err=> console.log(err))


        // imgURL: json,

              
            setForm({
              name: "",
              description: "",
              price: 0,
              stock: 0,
              img: null,
              categories: []
            })
          document.getElementById("fileinput").value = null;
            return 
    }
    }

    return {
        form,
        handleChange,
        isAvailable,
        errors,
        setForm,
        handleSubmit
    }

}