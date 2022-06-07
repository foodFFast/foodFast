import React from "react"
import {AiOutlineSearch} from "react-icons/ai";
import styles from "./searchBar.module.scss";
import { GlobalContainer, SearchIcon, SearchInput } from "./searchElements";

export default function SearchBar(){
    return(
    <GlobalContainer className={styles.container}>
        <SearchInput name="searchBar" placeholder="Search..." />
        <SearchIcon>
            <AiOutlineSearch />
        </SearchIcon>
    </GlobalContainer>)
}