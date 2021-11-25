import React from 'react';
import MainNavbar from './MainNavbar';
import styles from './ContactUs.module.css' ;

const ContactUs = () => {
    return (
        <div>
            <MainNavbar/>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <div className={styles.innContainer}>
                <div>
                    <h3>PRODUCTS & ORDERS</h3>
                    <ul> 
                       <li> +44 (0) 2076604453 </li>
                       <li> 8:00 - 20:00 </li>
                       <li> Monday - Friday </li>
                       <li> 8:00 - 17:00 </li>
                       <li>  Saturday </li>
                    </ul>
                </div>
                <div>
                    <h3>COMPANY INFO & INQUIRIES</h3>
                    <ul>
                       <li> +44 (0) 2076604452 </li>
                       <li> 8:00 - 17:00 </li>
                       <li> Monday - Friday </li>
                    </ul>
                </div>
                <div>
                    <h3>RETURNS & REFUNDS</h3>
                    <ul> 
                       <li> +44 (0) 2076604453 </li>
                       <li> 8:00 - 20:00 </li>
                       <li> Monday - Friday </li>
                       <li> 8:00 - 17:00 </li>
                       <li>  Saturday </li>
                    </ul>
                </div>
                <div>
                    <h3>DELIVERY</h3>
                    <ul> 
                       <li> +44 (0) 2076604453 </li>
                       <li> 8:00 - 20:00 </li>
                       <li> Monday - Friday </li>
                       <li> 8:00 - 17:00 </li>
                       <li>  Saturday </li>
                    </ul>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default ContactUs;