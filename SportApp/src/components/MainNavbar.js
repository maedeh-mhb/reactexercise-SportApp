import React, { useContext } from 'react';
import Styles from "./MainNavbar.module.css";
import userIcon from '../assets/icons/user.png'
import loginIcon from '../assets/icons/login.png'
import shoppingCart from "../assets/icons/shoppingCart.png";
import {Link} from "react-router-dom";
import { CartContext } from '../context/CartContextProvider';
import { LoginContext } from '../context/LoginContextProvider';



const MainNavbar = () => {
    const {state} = useContext(CartContext);
    const {state:login,dispatch:setLogin} = useContext(LoginContext);

    const stateHandler =()=> {
        setLogin({    email : "",
        password : "",
        confirmPassword : "",
        isAccepted : false,
        isLoggedIn : false
    })}
    
    return (
        <div className={Styles.navbarContainer}>
            <div>
                 <ul className={Styles.menu}>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/collections">Collections</Link></li>
                     <li><Link to="/contactUs">Contact Us</Link></li>
                 </ul>
                </div>
                <div className={Styles.navbarIcons}>
                    {login.isLoggedIn ? <span><img src={userIcon} onClick={stateHandler} title="Exit" alt="user"/></span> : <span><Link to="/login"><img src={ loginIcon} title="Login" alt="user"/> </Link></span>}
                
                <div className={Styles.counter}>
                    <Link to="/shoppingBasket">  <img src={shoppingCart} alt="cart" /> </Link>
                    <span>{state.itemCounter}</span>
                </div>
                </div>
            </div> 
    );
};

export default MainNavbar;
