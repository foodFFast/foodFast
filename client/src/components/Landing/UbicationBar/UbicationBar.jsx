import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { GlobalContainer, SearchInput, SearchIcon } from "./UbicationBar.styled"
import { FaSearchLocation } from "react-icons/fa"
import { searchCategory } from "../../../redux/actions/async"

const CategoryBar = () => {
    const [input, setInput] = useState(""); 
    const dispatch = useDispatch()
    
    const handleChange = (e)=> {
        setInput(e.target.value)
        dispatch(searchCategory(e.target.value))
    }

    const handleSubmit = ()=> {
            dispatch(searchCategory(input))
        alert("Búsqueda de ubicación en progreso! Devs working B)")
        
    }
    return (
        <GlobalContainer className={"container"}>
            <SearchInput
                value={input}
                onChange={handleChange}
                name="searchBar"
                placeholder="Filter categories..."
            />
            <SearchIcon onClick={handleSubmit}>
                <FaSearchLocation />
            </SearchIcon>
        </GlobalContainer>
    )
}

export default CategoryBar
