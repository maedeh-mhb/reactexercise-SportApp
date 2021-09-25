import React from 'react';
import Navbar from './Navbar';
import styles from "./Banner.module.css"
import main from "../images/main.jpg"


const Banner = () => {
    return (
        <div className={styles.mainContainer}>
            <img className={styles.mainImage} src={main} alt="Banner"/>
            <Navbar/>          
            <h1>NTC</h1>
            <p>Nike Training Club</p>
        </div>
    );
};

export default Banner;