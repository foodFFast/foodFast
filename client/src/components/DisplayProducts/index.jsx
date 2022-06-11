import React from "react";
import {GlobalContainer,} from "./displayElements";
import { useEffect } from "react";
import { useState } from "react";
import SingleProductCard from "./singleCard";
import FilterBar from "../filterBar";
import { FilterContainer, CardsContainer } from "./displayElements";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../redux/actions/async";

export default function DisplayProducts() {
    const allProducts = useSelector((state) => state.main.products.all)

  return (
  <GlobalContainer>
    {console.log(allProducts)} 
    <FilterContainer>
       <FilterBar />
    </FilterContainer>
    <CardsContainer >
      {allProducts && allProducts.map(p=> <SingleProductCard 
      key={p._id} id={p._id} name={p.name} price={p.price} img={p.img}/>)}
    </CardsContainer>
  </GlobalContainer>
  )
}

// http://localhost:3001/api/v1/products
