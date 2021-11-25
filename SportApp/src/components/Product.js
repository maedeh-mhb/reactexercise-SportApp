import React, { useContext } from 'react';
import Styles from "./Product.module.css";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContextProvider';
import { isIncluded } from '../helper/function';
import { quantityCount } from '../helper/function';
import trashIcon from '../assets/icons/trash.svg';

const Product = ({productData}) => {
    const {state,dispatch} = useContext(CartContext);
    
    return (
        <div className={Styles.productContainer}>
           <img className={Styles.productImage} src={productData.image} alt="product" />
           <h3>{ productData.name}</h3>
           <span className={Styles.productPrice}>{productData.price} $</span>
           <div className={Styles.detailContainer}>
               <Link to={`/product/${productData.id}`}>Details</Link>
               <div>
                  {quantityCount(state,productData.id) === 1 && <button onClick={() => dispatch ({type:"REMOVE-ITEM", payload :productData})}><img src={trashIcon} alt="trash" /> </button>} 
                  {quantityCount(state,productData.id)>1 && <button  onClick={() => dispatch ({type:"DECREASE", payload :productData})}>-</button>}
                  {quantityCount(state,productData.id)>0 && <span className={Styles.quantityCount}>{quantityCount(state,productData.id)}</span>}
                  {isIncluded(state,productData.id)?<button onClick={()=>dispatch({type:"INCREASE", payload:productData})}>+</button>:
                  <button className={Styles.addButton} onClick={()=>dispatch({type:"ADD-ITEM", payload:productData})}>Add to cart</button>} 
               </div>
           </div>
        </div>
    );
};

export default Product;