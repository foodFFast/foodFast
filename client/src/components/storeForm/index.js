import React, {  useState } from "react"
import { GlobalContainer, InputContainer, InputFiled, InputSimple, Label, MainContainer } from "../productForm/formElements"
import styles from "./store.module.scss"; 
import {GrFormNextLink} from "react-icons/gr";
import axios from "axios";
import {Link} from "react-router-dom";

export default function StoreForm(){
    // ruta
    // http://localhost:3001/api/v1/store
    const [input, setInput]= useState({name:"", description: ""})
    const [storeID, setStoreID] = useState(null);
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
                formdata.append('imageStore', file);

                fetch("http://localhost:3001/api/v1/store/image", {
                method: 'POST',
                body: formdata
                }).then(res=> res.json())
                .then(json=> 
          
                {
                return axios.post('http://localhost:3001/api/v1/store', {
                    name: input.name,
                    description: input.description, 
                    img: json.img
                    })}
              ).then(json=> {       
                setIsCreated(true)
                setStoreID(json.data.newStore._id)
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
                    <Label>Store Name:</Label>
                    <InputSimple onChange={handleChange} type={"text"} name="name" value={input.name}required/>
                </InputContainer>

                <InputContainer>
                    <Label>Description:</Label>
                    <InputSimple onChange={handleChange} type={"text"} name="description" value={input.description}required/>
                </InputContainer>
                
                <InputContainer>
                    <Label>Image:</Label>
                    <InputFiled type={"file"} onChange={handleChangeFile} id="imageStore" name="imageStore"/>
                </InputContainer>    

                <div>
                    <button onClick={handleSubmit} id={styles.createStore}>
                        CreateStore
                    </button> 
                    
                    {isCreated && <div id={styles.iconContainer}>
                        <Link to={`/createCategories/${storeID}`}>
                            <GrFormNextLink />
                        </Link>   
                    </div>}          
                </div>
                
                   
            </MainContainer>
        </GlobalContainer>

       )

}