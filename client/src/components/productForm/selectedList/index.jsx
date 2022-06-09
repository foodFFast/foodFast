import React from "react";
import styles from "./select.module.scss"

const categoryTest = ["Main Dish", "Drinks", "Apperitives"]

export default function SelectedList({setFormCategories, form}) {

    const handleChange = (e)=> {
        let value = e.target.value;
        let coincidence = form.tags.find(el=> el === value)
        if(!coincidence) {
            setFormCategories(prev=> ({...prev, tags: [...prev.tags, value]}))
        } 
    }

    return(
    <section className={styles.container}>
        <select onChange={handleChange} className={styles.selected}>
            <option value={""} className={styles.option}>--Select Tags--</option>
            {categoryTest.map(el=> <option key={el} value={el} className={styles.option}>{el}</option>)}

        </select>

    </section>)
}