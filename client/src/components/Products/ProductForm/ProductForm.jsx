import React, { useState } from "react";
import {
  GlobalContainer,
  InputContainer,
  Label,
  InputSimple,
  InputTextArea,
  InputFiled,
  MainContainer,
  FirstColumnContainer,
  SecondColumnContainer,
  OrnamentContainer,
  TagsProduct,
  TagCard,
  AvailableContainer,
  ErrorMsg,
  ButtonCreate,
  MessageContainer,
  ImgMessageContainer
} from "./formElements";
import useForm from "../../CustomHooks/useForm";
import SelectedList from "./selectedList";
import {CgUnavailable} from "react-icons/cg"
import {MdOutlineEventAvailable} from "react-icons/md"
import { useEffect } from "react";
import { Message } from 'rsuite';

const initialForm = {
  name: "",
  description: "",
  price: 0,
  stock: 0,
  categories: [],
  img: null,
};

export default function ProductForm() {
  // Usando el hook personalizado
  const [file, setFile] = useState(null);
  const [imgCharge, setImgCharge] = useState(false); 
  
  const { form, handleChange, isSend, errors, setForm,  isAvailable, handleSubmit, isEmpty } = useForm("product", initialForm, setImgCharge);



  useEffect(()=> {
    setForm({...form})
  }, [form, setForm])

  const handleChangeFile = (e)=> {
    const newFile = e.target.files[0]; 
    setFile(newFile)
    if(newFile)  setImgCharge(true)
    else setImgCharge(false)
  }

  const handleDeleteCategory = (value)=> {
    setForm({...form, categories: form.categories.filter(el=> el !== value)})
  }
  
  return (
  <GlobalContainer>
    <OrnamentContainer>
      <img src={require("../../../assets/burger.png")}  id="burguer" alt="burguer"/>
      <img src={require("../../../assets/pizza.png")}   id="pizza" alt="pizza"/>
      <img src={require("../../../assets/chicken.png")} id="chicken"alt="chicken"/>
    </OrnamentContainer>

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


    <MainContainer>
      <FirstColumnContainer>
        <InputContainer>
          <Label>Name:</Label>
          <InputSimple type={"text"} placeholder="Pizza..." name="name" value={form.name} onChange={handleChange}/>
          {<ErrorMsg error={errors.name ? true:false}>{errors.name}</ErrorMsg>}
        </InputContainer>

        <InputContainer>
          <Label>Description:</Label>
          <InputTextArea name="description" value={form.description} onChange={handleChange}/>
          {<ErrorMsg error={errors.description ? true:false}>{errors.description}</ErrorMsg>}
        </InputContainer>

        <InputContainer className="row">
          <Label>Price:</Label>
          <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
            <div id="priceContainer">
              <span>$/.</span><InputSimple type={"number"} min="0" name="price" id="price" value={form.price} onChange={handleChange}/>
            </div>
            {<ErrorMsg style={{width: "50%", marginLeft:"2.5rem"}}error={errors.price ? true:false}>{errors.price}</ErrorMsg>}
          </div>
        </InputContainer>

        <InputContainer className="row">
          <Label>Stock:</Label>
          <InputSimple type={"number"} name="stock" id="number" value={form.stock} 
            onChange={handleChange}/>
          <AvailableContainer isAvailable={isAvailable}>         
            <div>{isAvailable ? "Available":"Not available"}</div>
            {isAvailable ? <MdOutlineEventAvailable />:<CgUnavailable />}
          </AvailableContainer>
        </InputContainer>
      </FirstColumnContainer>

      <SecondColumnContainer>
        <InputContainer>
          <Label>Categories:</Label>
          <SelectedList setFormCategories={setForm} form={form}/>
         
          <TagsProduct>
            Tags for this product:
            {form.categories.map(el=> 
              <TagCard key={el}>
                <div id="tag">{el}</div>
                <div id="button">
                  <button id="deleteButton" onClick={()=> handleDeleteCategory(el)}>X</button>
                </div>
              </TagCard>)
            }
          </TagsProduct>
        </InputContainer>

        <InputContainer>
          <Label>Img:</Label>
          <InputFiled type={"file"} name="imageProduct" value={form.img} onChange={handleChangeFile} id="fileinput"/>
        </InputContainer>

        {imgCharge  &&  <ImgMessageContainer>
        <Message showIcon type="success">
          Image uploaded successfully
        </Message>
        </ImgMessageContainer>}
    
      </SecondColumnContainer>
    </MainContainer>    
            {/* LE paso la condicion de que no debe existir error para que se muestre el boton de crear */}
    <ButtonCreate isAvailable={Object.keys(errors).length === 0} onClick={()=> handleSubmit(file,setFile)}>Create Product</ButtonCreate> 
  </GlobalContainer>
  );
}