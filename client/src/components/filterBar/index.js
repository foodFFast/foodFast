import React, { useEffect, useState } from "react";
import SearchBar from "../searchBar/index"
import Modal from "react-modal"; 
import {AiOutlineFilter, AiFillCloseCircle} from "react-icons/ai"
import { FilterContainer, GlobalContainer, SearchContainer, UserContainer, ListContainer, MyH4, IconClose, FilterButton, ButtonContainer } from "./filterElements";
import {FaUserAlt, FaShoppingCart} from "react-icons/fa"; 
import Select from "react-select"; 
import { useDispatch, useSelector } from "react-redux";
import { filterbyCategories } from "../../redux/actions/sync";
import { fetchAllProducts } from "../../redux/actions/async";
const OptionsTest = [{
    value: "test1", label: "test1"
}, {
    value: "test2", label: "test2"
}, {
    value: "test3", label: "test3"
}]
export default function FilterBar () {
    const [isOpen, setIsOpen] = useState(false)
    let categories = useSelector((state) => state.main.categories.filtered);
    const dispatch = useDispatch(); 
    const [categoriesfilter, setCategoriesfilter] = useState([]);
    const [price, setPrice] = useState("1")

    let getCategories = () => {
        if(categories.length !== 0) {
            return categories.map(el=> {return {value: el.name, label: el.name}})
        }
        return []
    }

    const PricesValues = [{
        value: "1", label: "Ascendente"
    },{
        value: "-1", label: "Descendente"
    }

]
    const handleCleanFilter = () => {
        setCategoriesfilter([])
        dispatch(fetchAllProducts())
        setIsOpen(false)
    }
    const handleChangePrice = (e) => {
        setPrice(e.value)
    }
    const handleFilter = (data) => {
        setCategoriesfilter(data.map(el=> el.value))
        dispatch(fetchAllProducts())
    }
    const handleApplyFilter = () => {
        dispatch(filterbyCategories(categoriesfilter, price))
        setIsOpen(false)
        setCategoriesfilter([])

    }
    const handleOpen = ()=> {
        setIsOpen(true)
    }
    const handleClose = ()=> {
        setIsOpen(false)
    }
    useEffect(()=>{
        Modal.setAppElement('body');
    },[])
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
                            <Select options={getCategories()} isMulti onChange={handleFilter}/>
                        </ListContainer>

                        <ListContainer>
                            <MyH4>
                            By price:
                            </MyH4>
                            <Select options={PricesValues} onChange={handleChangePrice}/>
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
                            <FilterButton onClick={handleApplyFilter}>Apply filters</FilterButton>
                            <FilterButton onClick={handleCleanFilter}>Clean Filter</FilterButton>
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