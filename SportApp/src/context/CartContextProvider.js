import React, { createContext, useReducer } from 'react';
import { sumItems } from '../helper/function';

const initialState = {
    selectedItems : [],
    itemCounter : 0,
    total : 0,
    checkout: false
}



const cartReducer = (state,action)=> {
    console.log(state);
    switch (action.type) {
        case "ADD-ITEM":
          if(!state.selectedItems.find(item=>item.id === action.payload.id)){
                state.selectedItems.push({
                    ...action.payload,
                    quantity:1
                })
          }
          return {
              ...state,
              selectedItems:[...state.selectedItems],
              ...sumItems (state.selectedItems),
              checkout: false
          }
    
        case "REMOVE-ITEM":
          const newSelectedItems= state.selectedItems.filter(item=>item.id !== action.payload.id) ; 
          return {
              ...state,
              selectedItems:[...newSelectedItems],
              ...sumItems (newSelectedItems)
          }
          case "INCREASE":
              const indexI=state.selectedItems.findIndex(item=>item.id === action.payload.id);
              state.selectedItems[indexI].quantity++;
              return {
                  ...state,
                  ...sumItems (state.selectedItems)
              }
            case "DECREASE":
                const indexD=state.selectedItems.findIndex(item=>item.id === action.payload.id);
                state.selectedItems[indexD].quantity--;
                return {
                    ...state,
                    ...sumItems (state.selectedItems)
                }
            case "CHECKOUT":
                return {
                selectedItems : [],
                itemCounter : 0,
                total : 0,
                checkout: true
                }
            case "CLEAR":
                return {
                selectedItems : [],
                itemCounter : 0,
                total : 0,
                checkout: false
                }
                default:
                   return state
    }
}
export const CartContext=createContext();

const CartContextProvider = ({children}) => {

    const[state,dispatch]=useReducer(cartReducer,initialState);
    return (
        <div>
            <CartContext.Provider value={{state,dispatch}}>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartContextProvider;