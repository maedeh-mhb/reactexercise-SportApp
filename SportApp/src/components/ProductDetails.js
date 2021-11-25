import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import Styles from "./ProductDetails.module.css";
import ShoppingNavbar from "./ShoppingNavbar.js";

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const product = data[id - 1];
    const {image, price, name,description}=product;
    console.log(product);
    return (
        <>
        <ShoppingNavbar />
        <div className={Styles.Container}>
            <div className={Styles.innContainer}>
                <div className={Styles.imageContainer}><img src={image} alt="product" /></div>
                <div>
                <h3>{name}</h3>
                <span>Price: {price} $</span>
                </div>
            </div>
            <div className={Styles.detailContainer}>
               Product Details:<br/> {description}
            </div>
        </div>
       </>
    );
};

export default ProductDetails;