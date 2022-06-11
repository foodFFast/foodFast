import React, { useEffect, useState } from "react";
import {
  DescriptionContainer,
  GlobalContainer,
  ImageContainer,
  MainContainer,
  TitleContainer,
  ListItem,
  Etiqueta,
  Data,
  StoreName,
  CarShop,
  BuyButton,
  ButtonsContainer,
  SecondMainContainer
} from "./detailElements";

import {AiOutlineShoppingCart} from "react-icons/ai"
import {AiOutlineCreditCard} from "react-icons/ai"
import { useParams } from "react-router-dom";

const defaultProduct = {name: "", description: "", stock: "", price: 0, tags: [], img: ""}
export default function DetailProduct() {
    const [detail, setDetail] = useState(defaultProduct)
    const [storeName, setStoreName] = useState("")
    const {productID} = useParams()

  useEffect(()=> {
    fetch(`http://localhost:3001/api/v1/products/${productID}`)
    .then(res=> res.json())
    .then(json=> {setDetail(json)
        return fetch(`http://localhost:3001/api/v1/store/${json.storeId[0]}`)
    }).then(res=> res.json()).then(json=> {setStoreName(json.name)})

  }, [])
  
  
    return (
            <GlobalContainer>
                  <TitleContainer>{detail.name}</TitleContainer>
                {console.log(detail.img)}
                  <MainContainer>
                    <ImageContainer>
                      <img src={detail.img} alt="..." />
                    </ImageContainer>
                    
                <SecondMainContainer>
                    <div style={{display: "flex", width: "100%"}}>
                        <StoreName>{storeName}</StoreName>
                    </div>
            
                    <DescriptionContainer>
                        <ListItem>
                            <Etiqueta>DESCRIPTION:</Etiqueta>
                            <Data>
                            {detail.description}
                            </Data>
                        </ListItem>
            
                        <div style={{display: "flex", alignItems: "flex-end", justifyContent: "center"}}>
                            <ListItem>
                                <Etiqueta>Stock</Etiqueta>
                                <Data>{detail.stock}</Data>
                            </ListItem>
                            
                            <ListItem>
                                <Etiqueta>Price</Etiqueta>
                                <Data>{`$/ ${detail.price}`}</Data>
                            </ListItem>
                        </div>
            
                        <ListItem>
                            <Etiqueta>Category:</Etiqueta>
                            <Data>{detail.category}</Data>
                        </ListItem>
            
                        <ListItem>
                            <Etiqueta>Tags:</Etiqueta>
                            <Data>{detail.tags.map(el=> <span>{`  ${el}- `}</span>)}</Data>
                        </ListItem>
                    </DescriptionContainer>
            
                    <ButtonsContainer>
                        <CarShop>
                            <AiOutlineShoppingCart />
                        </CarShop>
                        <BuyButton>
                            <AiOutlineCreditCard />
                        </BuyButton>
                    </ButtonsContainer>
                    </SecondMainContainer>
                </MainContainer>    
            </GlobalContainer>

  );
}
