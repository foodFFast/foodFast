import React from "react";
import { MainContainer, NameCategory } from "./categoryElements";
import styles from "./category.module.scss"; 

export default function CategoryCard ({testObject}){
    return(
    <MainContainer img={testObject.imgURL} bgColor = {testObject.bgColor}>
        {/* <img src={testObject.imgURL} alt="categoryIMG"/> */}
        <NameCategory id={styles.categoryName}>{testObject.categoryName}</NameCategory>
    </MainContainer>)
}