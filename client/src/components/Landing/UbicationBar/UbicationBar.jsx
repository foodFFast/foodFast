import React from "react"
import { GlobalContainer, SearchInput, SearchIcon } from "./UbicationBar.styled"
import { FaSearchLocation } from "react-icons/fa"

const LocationBar = () => {
    return (
        <GlobalContainer className={"container"}>
            <SearchInput
                name="searchBar"
                placeholder="Where do you want to find restaurants?"
            />
            <SearchIcon>
                <FaSearchLocation />
            </SearchIcon>
        </GlobalContainer>
    )
}

export default LocationBar
