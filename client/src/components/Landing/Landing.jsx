import React from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Banner from "./Banner/Banner"
import CategoryBar from "./UbicationBar/UbicationBar"
import { CategoriesContainer, GlobalContainer } from "./landingElements"
import CategoryCard from "../Categories/CategorysLanding"
import { useEffect } from "react"
import { searchCategory, searchProduct } from "../../redux/actions/async"

const Landing = () => {
    const categories = useSelector((state) => state.main.categories.all)
    const filterCategories = useSelector((state)=> state.main.categories.filtered);
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(searchProduct(""))
        dispatch(searchCategory(""))
    }, [dispatch])

    // useEffect(()=> {
    //  return ()=> { dispatch(clean_categories()); dispatch(clean_products())}
    // })
    return (
        <GlobalContainer>

            <Banner />
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <CategoryBar className="LocationBar" />
            </div>
            <CategoriesContainer>
                          {filterCategories.length ===0 ? categories.map(c=> 
                          <Link key={c._id} to={`/categories/${c._id}`}>
                                <CategoryCard key={c._id} category={c} />
                          </Link>):filterCategories.map(c=> 
                            <Link key={c._id} to={`/categories/${c._id}`}>
                            <CategoryCard key={c._id} category={c} />
                        </Link>
                          )}
            </CategoriesContainer>
        </GlobalContainer>
    )
}

export default Landing