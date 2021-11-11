import React, { useContext } from 'react';
import logo from "../images/logo.png";
import shoppingCart from "../assets/icons/shoppingCart.png";
import Styles from "./ShoppingNavbar.module.css"
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';


const ShoppingNavbar = () => {
    const {state} =useContext(CartContext);
    
    return (
        <div className={Styles.navbarContainer}>
             <div>
                <ul className={Styles.menu}>
                     <li><Link to="/">Home</Link></li>
                     <li>Plans</li>
                     <li>Contact Us</li>
                </ul>
            </div>
            <div className={Styles.navbarIcons}>
                <img src={logo} alt="logo" />
                <div className={Styles.counter}>
                    <Link to="/shoppingBasket">  <img src={shoppingCart} alt="cart" /> </Link>
                    <span>{state.itemCounter}</span>
                </div>
            </div>
        </div>
    );
};

export default ShoppingNavbar;