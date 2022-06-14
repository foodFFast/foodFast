import { useState } from "react";
import { CleanCategoryImputs, PostCategory, PostCategoryImg } from "../Categories/CategoryForm/PostFunctions";
import { CleanProductsInput, PostProduct, PostProductImg } from "../Products/ProductForm/PostFunctions";
import { validateForm } from "./validateForm";

export default function useForm(type, initialForm, setImgCharge) {

    const [form, setForm] = useState(initialForm); 
    const [errors, setErrors] = useState({});
    const [isAvailable, setIsAvailable] = useState(false);
    const [isSend, setIsSend] = useState(false); 

    const [isEmpty, setIsEmpty] = useState(false); 
 

    const handleChange = (e)=> {

        const {name, value} = e.target; 
        setForm({...form, [name]: value})

        // La función validateForm devuelve un objeto
        let currentErrors = validateForm({...form, [name]: value}, type)
        // Que después seteo en mi estado de errores
        setErrors(currentErrors)
        if(type === "product" && name === "stock") {
            if (value > 0) setIsAvailable(true)
            else setIsAvailable(false)   
        }    
      }

    const handleSubmit =  (file)=> {
        if(!file || form.name === "" || form.description  === "") { 
          setIsEmpty(true)
          setTimeout(()=> setIsEmpty(false), 5000)
        }
        else {  
          const formdata = new FormData()

          if(type === "product") {
            formdata.append('imageProduct', file)
            PostProductImg(formdata).then(res=> res.json())
            .then(json=> PostProduct(form, json))
            .then(res=> setIsSend(true)).catch(err=> console.log(err))
            CleanProductsInput(setIsSend, setForm, setIsAvailable, setImgCharge)

          } else {

            formdata.append('imageCategory', file);
            PostCategoryImg(formdata).then(res=> res.json())
            .then(json=> PostCategory(form, json))
            .then(json=> setIsSend(true))
            .catch(err=> console.log(err))
            .finally(err=> {            
              CleanCategoryImputs(setIsSend, setForm, setIsAvailable, setImgCharge)
            })
          }      
    }
  }
    return {
        form,
        handleChange,
        isAvailable,
        errors,
        setForm,
        isSend,
        handleSubmit,
        isEmpty
    }

}