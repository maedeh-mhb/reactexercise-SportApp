import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContextProvider';
import Styles from "./ProductDetails.module.css"

const ProductDetails = (props) => {
    const id = props.match.params.id;
    const data = useContext(ProductContext);
    const product = data[id - 1];
    const {image, price, category, title, description}=product;
    return (
        <div className={Styles.Container}>
            <div className={Styles.imageContainer}>
                <img src={image} alt="product" />
                </div>
            <div className={Styles.detailContainer}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p> <span>Category:</span>{category}</p>
                <div>
                    <span>{price} $</span>
                </div>
            </div>
            </div>
       
    );
};

export default ProductDetails;