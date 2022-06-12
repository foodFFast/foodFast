import React from "react";
import {GlobalContainer,} from "./displayElements";
import { useEffect } from "react";
import { useState } from "react";
import SingleProductCard from "./singleCard";
import FilterBar from "../filterBar";
import { FilterContainer, CardsContainer } from "./displayElements";
import { useSelector } from "react-redux";


export default function DisplayProducts() {
    const allProducts = useSelector((state) => state.main.products.all);
    const filterProducts = useSelector((state)=> state.main.products.filtered);

  return (
  <GlobalContainer>
    <FilterContainer>
       <FilterBar />
    </FilterContainer>
    <CardsContainer >
      {filterProducts.length ===0 ? allProducts.map(p=> <SingleProductCard 
      key={p._id} id={p._id} name={p.name} price={p.price} img={p.img}/>): filterProducts.map(p=> <SingleProductCard 
        key={p._id} id={p._id} name={p.name} price={p.price} img={p.img}/>)}
    </CardsContainer>
  </GlobalContainer>
  )
}

// http://localhost:3001/api/v1/products
