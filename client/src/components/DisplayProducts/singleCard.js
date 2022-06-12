import React from "react";
import {
    CardContainer,
    TitleDiv,
    ImageContainer,
    FooterContainer,
    ButtonsContainer,
    PriceContainer
  } from "./displayElements";
  import {MdReadMore} from "react-icons/md"; 
  import {AiOutlineShoppingCart} from "react-icons/ai"
  import {Link} from "react-router-dom";

export default function SingleProductCard ({id, name, price, img}){
    return(
    <CardContainer>
        <TitleDiv>
            {name}
        </TitleDiv>

        <ImageContainer > 
            <Link to={`/products/${id}`}>
                <img src={img} alt="imagen"/> 
            </Link>
        </ImageContainer>

        <FooterContainer>
            <PriceContainer>
                ${price}
            </PriceContainer>
            <ButtonsContainer>
                
                <Link to={`/products/${id}`}>
                    <AiOutlineShoppingCart id="car"/>
                </Link>
                
                <Link to={`/products/${id}`} id="details">
                    <MdReadMore />
                </Link>
                
            </ButtonsContainer>
        </FooterContainer>
    </CardContainer>
    )
}