import React, {  useEffect, useState } from "react"
import { ErrorMsg, GlobalContainer, InputContainer, InputFiled, InputSimple, Label, MainContainer, MessageContainer } from "../../Products/ProductForm/formElements"
import styles from "./category.module.scss"; 
import useForm from "../../CustomHooks/useForm";
import { Message } from 'rsuite';
import { CreateButton, ImgMessageContainer } from "./categoryElements";

const initialForm = {
    name: "", 
    description: "", 
    img: null
}

export default function CategoryForm(){
    const [file, setFile] = useState(null);
    const [imgCharge, setImgCharge] = useState(false); 


    const { form, handleChange, isSend, errors, setForm,  handleSubmit, isEmpty } = useForm("category", initialForm, setImgCharge);

    useEffect(()=> {
        setForm({...form})
      }, [form, setForm])


    const handleChangeFile = (e)=> {
        const newFile = e.target.files[0]; 
        setFile(newFile)
        if(newFile)  setImgCharge(true)
        else setImgCharge(false)
      }
    
    return(
        <GlobalContainer>
                {isSend  &&  <MessageContainer color={"green"}>
      <Message showIcon type="success" header="Success" full>
        The product is created correctly
      </Message> 
    </MessageContainer>}
      
      {
        isEmpty && <MessageContainer color={"red"}>
    <Message showIcon type="error" header="Error">
      Product could not be created because of empty fields
    </Message>
      </MessageContainer>
      }
            <MainContainer id={styles.MainContainer}>
                
                <InputContainer>
                    <Label>Category Name:</Label>
                    <InputSimple onChange={handleChange} type={"text"} name="name" value={form.name}required/>
                    {<ErrorMsg error={errors.name ? true:false}>{errors.name}</ErrorMsg>}
                </InputContainer>

                <InputContainer>
                    <Label>Description:</Label>
                    <InputSimple onChange={handleChange} type={"text"} name="description" value={form.description}required/>
                    {<ErrorMsg error={errors.description ? true:false}>{errors.description}</ErrorMsg>}
                </InputContainer>
                
                <InputContainer>
                    <Label>Image:</Label>
                    <InputFiled type={"file"} onChange={handleChangeFile} id="imageCategory" name="imageCategory"/>
                    {imgCharge  &&  
                    <ImgMessageContainer>
                            <Message showIcon type="success">
                            Image uploaded successfully
                            </Message>
                     </ImgMessageContainer>}
                </InputContainer>    

                <div>
                    <CreateButton onClick={()=> handleSubmit(file)} id={styles.createStore}>
                        Create Category
                    </CreateButton>         
                </div>
                
                   
            </MainContainer>
        </GlobalContainer>

       )

}