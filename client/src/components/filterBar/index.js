import React, { useState } from "react";
import SearchBar from "../searchBar/index"
import Modal from "react-modal"; 
import {AiOutlineFilter, AiFillCloseCircle} from "react-icons/ai"

export default function FilterBar () {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = ()=> {
        setIsOpen(true)
    }
    const handleClose = ()=> {
        setIsOpen(false)
    }
    return(
    <div>
        <AiOutlineFilter onClick={handleOpen}/>
        Hola soy un filterBar
        <Modal isOpen={isOpen}>
            <AiFillCloseCircle onClick={handleClose}/>
            <h1>Hola</h1>
        </Modal>
        <SearchBar />
    </div>)
}