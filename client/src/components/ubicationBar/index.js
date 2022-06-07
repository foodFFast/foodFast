import React from "react";
import { GlobalContainer, SearchInput, SearchIcon } from "./ubicationElements";
import {FaSearchLocation} from "react-icons/fa"

export default function LocationBar(){
    return(
    <GlobalContainer className={"container"}>
        <SearchInput name="searchBar" placeholder="Where do you want to find restaurants?" />
        <SearchIcon>
            <FaSearchLocation />
        </SearchIcon>
    </GlobalContainer>)
}