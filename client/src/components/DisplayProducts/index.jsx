import React from "react";
import {GlobalContainer,} from "./displayElements";
import SingleProductCard from "./singleCard";
import FilterBar from "../filterBar";
import { FilterContainer, CardsContainer } from "./displayElements";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clean_categories, clean_products } from "../../redux/actions/sync";
import { newFilterProduct, searchCategory, searchProduct } from "../../redux/actions/async";


export default function DisplayProducts() {
    const filterProducts = useSelector((state)=> state.main.products.filtered);
    const dispatch = useDispatch(); 

   
    useEffect(()=> {
      dispatch(newFilterProduct("price", "1"))
      return () => {dispatch(clean_products); dispatch(clean_categories)}
  }, [])
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