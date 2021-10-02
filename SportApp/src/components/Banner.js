import React, { useState } from 'react';
import Navbar from './Navbar';
import styles from "./Banner.module.css";
import main from "../images/main.jpg";
import SignUp from './SignUp';
import Login from './Login';
import { Route,Switch,Redirect} from 'react-router-dom';


const Banner = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const statusHandler=()=>{
        setIsLoggedIn(!isLoggedIn) 
    }

    return (
        <div className={styles.mainContainer}>
            <img className={styles.mainImage} src={main} alt="Banner"/>
            <Navbar/>          
            <h1>NTC</h1>
            <p>Nike Training Club</p>    
            {isLoggedIn?<Login statusHandler={statusHandler}/>:<SignUp statusHandler={statusHandler}/>}
            <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />  
            </Switch>
        </div>
    );
};

export default Banner;