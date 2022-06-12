import React, { useState } from "react";
import SearchBar from "../searchBar/index"
import Modal from "react-modal"; 
import {AiOutlineFilter, AiFillCloseCircle} from "react-icons/ai"
import { FilterContainer, GlobalContainer, SearchContainer, UserContainer, ListContainer, MyH4, IconClose, FilterButton, ButtonContainer } from "./filterElements";
import {FaUserAlt, FaShoppingCart} from "react-icons/fa"; 
import Select from "react-select"; 
const OptionsTest = [{
    value: "test1", label: "test1"
}, {
    value: "test2", label: "test2"
}, {
    value: "test3", label: "test3"
}]
export default function FilterBar () {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = ()=> {
        setIsOpen(true)
    }
    const handleClose = ()=> {
        setIsOpen(false)
    }
    return(
    <GlobalContainer>
        <FilterContainer>
            <div onClick={handleOpen}>
                <AiOutlineFilter />
                Filtrar Resultados
            </div>
            <Modal isOpen={isOpen}>
                <IconClose>
                        <AiFillCloseCircle onClick={handleClose}/>
                </IconClose>
                        <ListContainer>
                            <MyH4>
                            By category:
                            </MyH4>
                            <Select options={OptionsTest} />
                        </ListContainer>

                        <ListContainer>
                            <MyH4>
                            By price:
                            </MyH4>
                            <Select options={OptionsTest}/>
                        </ListContainer>

                        <ListContainer>
                            <MyH4>
                            By rating:
                            </MyH4>
                            <Select options={OptionsTest} isMulti/>
                        </ListContainer>

                        <ListContainer>
                            <MyH4>
                            By stock:
                            </MyH4>
                            <Select options={OptionsTest}/>
                        </ListContainer>

                        <ButtonContainer>
                            <FilterButton>Apply filters</FilterButton>
                        </ButtonContainer>
            </Modal>
        </FilterContainer>
        
        <SearchContainer>
            <SearchBar />
        </SearchContainer>
           
        <UserContainer>
            <div>
                <FaShoppingCart />
                <FaUserAlt />
            </div>
        </UserContainer>
    </GlobalContainer>)
}