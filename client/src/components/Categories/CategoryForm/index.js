import React, {  useState } from "react"
import { GlobalContainer, InputContainer, InputFiled, InputSimple, Label, MainContainer } from "../../Products/ProductForm/formElements"
import styles from "./category.module.scss"; 
import {GrFormNextLink} from "react-icons/gr";
import axios from "axios";
import {Link} from "react-router-dom";

export default function CategoryForm(){
    // ruta
    // http://localhost:3001/api/v1/categories
    const [input, setInput]= useState({name:"", description: ""})
    const [isCreated, setIsCreated] = useState(false); 
    const [file, setFile] = useState(null); 

    const handleChange = (e)=> {
        const {name, value} = e.target
        setInput({...input, [name]: value})
    }
    const handleChangeFile = (e)=> {
        const newFile = e.target.files[0]; 
        setFile(newFile)
      }

    const handleSubmit = async ()=> {
        if(input.name !== "" && input.description !== "") {
            if(!file) alert("You must upload a image") 
            else {
                const formdata = new FormData();
                formdata.append('imageCategory', file);

                fetch("http://localhost:3001/api/v1/categories/image", {
                method: 'POST',
                body: formdata
                }).then(res=> res.json())
                .then(json=> 
          
                {
                return axios.post('http://localhost:3001/api/v1/categories', {
                    name: input.name,
                    description: input.description, 
                    img: json.img
                    })}
              ).then(json=> {       
                setIsCreated(true)
                document.getElementById("imageStore").value = null; 
                setInput({name:"", description: ""})
            })
              .catch(err=> console.log(err))

            }
            
        }     
    }


    return(
        <GlobalContainer>
            <MainContainer id={styles.MainContainer}>
                <InputContainer>
                    <Label>Category Name:</Label>
                    <InputSimple onChange={handleChange} type={"text"} name="name" value={input.name}required/>
                </InputContainer>

                <InputContainer>
                    <Label>Description:</Label>
                    <InputSimple onChange={handleChange} type={"text"} name="description" value={input.description}required/>
                </InputContainer>
                
                <InputContainer>
                    <Label>Image:</Label>
                    <InputFiled type={"file"} onChange={handleChangeFile} id="imageCategory" name="imageCategory"/>
                </InputContainer>    

                <div>
                    <button onClick={handleSubmit} id={styles.createStore}>
                        CreateStore
                    </button> 
                    
                    {isCreated && <div id={styles.iconContainer}>
                        <Link to={`/createProduct`}>
                            <GrFormNextLink />
                        </Link>   
                    </div>}          
                </div>
                
                   
            </MainContainer>
        </GlobalContainer>

       )

}