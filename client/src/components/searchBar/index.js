import React, { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai";
import styles from "./searchBar.module.scss";
import { GlobalContainer, SearchIcon, SearchInput } from "./searchElements";
import {useDispatch} from "react-redux"
import { searchProduct } from "../../redux/actions/async";

export default function SearchBar(){
    const [input, setInput] = useState(""); 
    const dispatch = useDispatch()
    
    const handleChange = (e)=> {
        setInput(e.target.value)
        dispatch(searchProduct(e.target.value))
    }

    const handleSubmit = ()=> {
        dispatch(searchProduct(input))
    }
    return(
    <GlobalContainer className={styles.container}>
        <SearchInput name="searchBar" value={input} onChange={handleChange} placeholder="Search..." />
        <SearchIcon onClick={handleSubmit}>
            <AiOutlineSearch />
        </SearchIcon>
    </GlobalContainer>)
}