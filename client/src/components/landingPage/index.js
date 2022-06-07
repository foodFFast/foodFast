import React from "react";
import styles from "./landing.module.scss"
export default function LandingPage(){
    return(
    <section>
        <div className={styles.blockDisplay}/>
        
        <div className={styles.ornament}/>
        <h1 className={styles.welcome}>Everything you want in one place</h1>
        <img id={styles.mainImg} src="https://www.minervafoods.com/wp-content/uploads/2017/02/como_fazer_hamburguer_caseiro_0.jpg" alt="burguerIMG"/>
    </section>)
}