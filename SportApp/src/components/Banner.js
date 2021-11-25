import React, {useContext} from 'react';
import MainNavbar from './MainNavbar';
import styles from "./Banner.module.css";
import main from "../images/mainImage.jpg";
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

const Banner = () => {
    const {state} = useContext(LoginContext);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.innContainer}>
            <img className={styles.mainImage} src={main} alt="Banner"/>
            <MainNavbar/>   
            <div className={styles.main}>         
            <span > 
            {state.isLoggedIn ?  <div className={styles.title}><h1>Start Your Yoga Journey !</h1></div> :<div className={styles.right}><h1>BECOME A MaYoga MEMBER</h1>
            <p>Create your MaYoga Member profile and get first access to the very best of MaYoga products, inspiration and community.</p>  
            <Link to="/signup"><button>Create Account</button></Link></div>}  
            </span>
            </div> 
            </div>
        </div>
    );
};

export default Banner;