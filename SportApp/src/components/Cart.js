import React, { useContext } from 'react';
import { CartContext } from '../context/CartContextProvider';
import trashIcon from "../assets/icons/trash.svg";
import Styles from "./cart.module.css";


const Cart = (props) => {
    const {image, name, price, quantity} = props.data;
    const {dispatch} = useContext(CartContext);

    return (
        <div>
            <div className={Styles.itemsContainer}>
                <img  className={Styles.itemsImage} src={image} alt ="product" />
                <div className={Styles.title}>
                    <h3>{name}</h3>
                    <p>{price} $</p>
                </div>
                <div><span className={Styles.quantity}>{quantity}</span></div>
                <div className={Styles.buttonContainer} >
                { quantity > 1 ?
                <button onClick = {() => dispatch ({type : "DECREASE", payload : props.data})}>-</button>:
                <button onClick = {() => dispatch ({type : "REMOVE-ITEM", payload : props.data})}><img src ={trashIcon} alt="trash" /></button>}
                <button onClick = {() => dispatch ({type : "INCREASE", payload : props.data})}>+</button>
            </div>
            </div>
        </div>
    );
};

export default Cart;