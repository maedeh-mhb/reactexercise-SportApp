import React from 'react';
import HomePage from './components/HomePage';
import { Route, Switch } from 'react-router-dom';
import ProductContextProvider from './context/ProductContextProvider';
import Collections from './components/Collections';
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import ShoppingBasket from './components/ShoppingBasket';
import LoginContextProvider from './context/LoginContextProvider';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ContactUs from './components/ContactUs';

const App =()=> {
  
    return (
      <div>
        <ProductContextProvider>
           <CartContextProvider>
           <LoginContextProvider>
             <Switch>   
              <Route path="/product/:id" component={ProductDetails} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/shoppingBasket" component={ShoppingBasket} />
              <Route path="/collections" component={Collections} />
              <Route path="/contactUs" component={ContactUs} />
              <Route exact path="/" component={HomePage}  />
           </Switch>
           </LoginContextProvider>
           </CartContextProvider>
        </ProductContextProvider>
      </div>
    );
  }


export default App;