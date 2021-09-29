import React from 'react';
import styles from "./Navbar.module.css";
import logo from "../images/logo.png";
import menuIcon from "../images/menu.png";
import {Link} from "react-router-dom";



const Navbar = () => {
    return (
        <div>
            
            <div className={styles.navBar}>
                <div className={styles.menuContainer}>
                 <ul>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/collections">Collections</Link></li>
                     <li>Plans</li>
                     <li>Contact Us</li>
                 </ul>
                </div>
                <div className={styles.logoContainer}>
                <Link> <img className={styles.logo}  src={logo} alt="logo" /></Link>
                    <img className={styles.menuIcon} src={menuIcon} alt="menu"/>
                </div>
            </div> 
        </div>
    );
};

export default Navbar;
