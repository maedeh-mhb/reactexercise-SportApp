import React,{useContext} from 'react';
import Product from './Product';
import Styles from './Collections.module.css';
import { ProductContext } from '../context/ProductContextProvider';
import ShoppingNavbar from './ShoppingNavbar';

const Collections = () => {
    const products=useContext(ProductContext);
    return (
        <div>
            <ShoppingNavbar />  
             <div className={Styles.productContainer}>  
                {products.map(product=> <Product key={product.id} productData={product} />)}
             </div>
        </div>
    );
};

export default Collections;
