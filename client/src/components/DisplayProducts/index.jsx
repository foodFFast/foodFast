import React from "react";
import {GlobalContainer,} from "./displayElements";
import SingleProductCard from "./singleCard";
import FilterBar from "../filterBar";
import { FilterContainer, CardsContainer } from "./displayElements";
import { useSelector } from "react-redux";




export default function DisplayProducts() {
    const filterProducts = useSelector((state)=> state.main.products.filtered);

  return (
  <GlobalContainer>
    <FilterContainer>
       <FilterBar />
    </FilterContainer>
    <CardsContainer >
      {filterProducts.length ===0 ? <div>Not results found</div>: filterProducts.map(p=> <SingleProductCard 
        key={p._id} id={p._id} name={p.name} price={p.price} img={p.img}/>)}
    </CardsContainer>
  </GlobalContainer>
  )
}

// http://localhost:3001/api/v1/products