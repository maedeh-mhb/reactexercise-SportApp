import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import Cart from './Cart';
import { Link } from 'react-router-dom';
import ShoppingNavbar from './ShoppingNavbar';
import Styles from "./ShoppingBasket.module.css";

const ShoppingBasket = () => {
    const {state,dispatch}=useContext(CartContext);
    
    return (
        <div>
            <ShoppingNavbar />
            <div className={Styles.basketContainer}>
            <div>
                {state.selectedItems.map(item => <Cart key = {item.id} data = {item} /> )}
            </div>
            {
                state.itemCounter > 0 && <div className={Styles.counterContainer}>
                    <p> <span>Total Items:</span> {state.itemCounter} </p>
                    <p> <span>Total Payments :</span> {state.total} $</p>
                    <div className={Styles.buttonContainer}>
                        <button onClick = {() => dispatch ({type : "CHECKOUT"})}>Checkout</button>
                        <button onClick = {() => dispatch ({type : "CLEAR"})}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={Styles.checkout}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/collections">Buy More</Link>
                </div>
            }
            {
                !state.checkout && state.itemCounter === 0 && <div className={Styles.emptyBasket}>
                <h3>Want to buy?</h3>
                <Link to="/collections">Back To Shop</Link>
            </div>
            }
            </div>
        </div>
    );
};

export default ShoppingBasket;