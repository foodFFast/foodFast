import React from "react"
import { AiOutlineSearch } from "react-icons/ai"
import { GlobalContainer, SearchIcon, SearchInput } from "./SearchBar.styled"

const SearchBar = () => {
    return (
        <GlobalContainer>
            <SearchInput name="searchBar" placeholder="Search..." />
            <SearchIcon>
                <AiOutlineSearch />
            </SearchIcon>
        </GlobalContainer>
    )
}

export default SearchBar
