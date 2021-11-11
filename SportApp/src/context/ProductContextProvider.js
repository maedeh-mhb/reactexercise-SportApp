import React, { createContext, useEffect, useState } from "react";
import { getApi } from "../services/Api";

export const ProductContext= createContext();

const ProductContextProvider = ({children}) => {
const [products,setProducts]= useState([]);

useEffect(()=>{
    const fetchApi=async()=>{
        setProducts(await getApi())
    }
    fetchApi();
},[])
    return (
       <ProductContext.Provider value={products}>
             {children}
       </ProductContext.Provider>
    );
};
export default ProductContextProvider;