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
  ButtonCreate
} from "./formElements";
import useForm from "./useForm";
import { validateForm } from "./validateForm";
import SelectedList from "./selectedList";
import {CgUnavailable} from "react-icons/cg"
import {MdOutlineEventAvailable} from "react-icons/md"
import {useParams} from "react-router-dom"
import { useEffect } from "react";

const initialForm = {
  storeID: "",
  name: "",
  description: "",
  price: 0,
  stock: 0,
  category: "",
  img: null,
  tags: [],
};

export default function ProductForm() {
  // Usando el hook personalizado
  const { form, handleChange, errors, setForm,  isAvailable, handleSubmit } = useForm(initialForm, validateForm);
  
  const [newTag, setNewTag] = useState(""); 
  const [file, setFile] = useState(null); 
  
  const { storeID, category } = useParams();

  useEffect(()=> {
    setForm({...form, storeID, category})
  }, [])

  const handleChangeFile = (e)=> {
    const newFile = e.target.files[0]; 
    setFile(newFile)
  }

  const handleAddTag = ()=> {
    if(newTag !== "") {
      setForm({...form, tags: [...form.tags, newTag]})
      setNewTag("")
    }
  }

  const handleChangeTag = (e) => {
    let value = e.target.value; 
    setNewTag(value)
  }

  const handleDeleteCategory = (value)=> {
    setForm({...form, tags: form.tags.filter(el=> el !== value)})
  }
  
  return (
  <GlobalContainer>
    {console.log(form)}
    <OrnamentContainer>
      <img src={require("../../assets/burger.png")}  id="burguer" alt="burguer"/>
      <img src={require("../../assets/pizza.png")}   id="pizza" alt="pizza"/>
      <img src={require("../../assets/chicken.png")} id="chicken"alt="chicken"/>
    </OrnamentContainer>

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
          <Label>Tags:</Label>
          <SelectedList setFormCategories={setForm} form={form}/>
            <InputSimple type={"text"} name="tags" value={newTag} onChange={handleChangeTag}/>  
            <button id="addTag" onClick={handleAddTag}>Add new</button>
          <TagsProduct>
            Tags for this product:
            {form.tags.map(el=> 
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
      </SecondColumnContainer>
    </MainContainer>    
            {/* LE paso la condicion de que no debe existir error para que se muestre el boton de crear */}
    <ButtonCreate isAvailable={Object.keys(errors).length === 0} onClick={()=> handleSubmit(file,setFile)}>Create Product</ButtonCreate> 
  </GlobalContainer>
  );
}