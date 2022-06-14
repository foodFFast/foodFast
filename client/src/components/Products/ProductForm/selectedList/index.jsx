import React from "react";
import styles from "./select.module.scss"
import {useSelector} from "react-redux"

export default function SelectedList({setFormCategories, form}) {
    const categories = useSelector(state=> state.main.categories.all)

    const handleChange = (e)=> {
        let value = e.target.value;
        let coincidence = form.categories.find(el=> el === value)
        if(!coincidence) {
            setFormCategories(prev=> ({...prev, categories: [...prev.categories, value]}))
        } 
    }

    return(
    <section className={styles.container}>
        {console.log(categories)}
        <select onChange={handleChange} className={styles.selected}>
            <option value={""} className={styles.option}>--Select Categories--</option>
            {categories.map(el=> <option key={el._id} value={el.name} className={styles.option}>{el.name}</option>)}

        </select>

    </section>)
}