import React, {useContext} from 'react';
import MainNavbar from './MainNavbar';
import styles from "./Banner.module.css";
import main from "../images/main.jpg";
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';

const Banner = () => {
    const {state2} = useContext(LoginContext);

    return (
        <div className={styles.mainContainer}>
            <div>
            <img className={styles.mainImage} src={main} alt="Banner"/>
            <MainNavbar/>   
            <div className={styles.main}>   
            <span className={styles.left}>   
            <h1>NTC</h1>
            <p>Nike Training Club</p>  
            </span>
            <span > 
            {state2.isLoggedIn ?  <div className={styles.title}><h1>Start Your Fitness Journey !</h1></div> :<div className={styles.right}><h1>BECOME A NIKE MEMBER</h1>
            <p>Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>  
            <Link to="/signup"><button>Create Account</button></Link></div>}  
            </span>
            </div> 
            </div>
        </div>
    );
};

export default Banner;