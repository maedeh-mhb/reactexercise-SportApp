import React, { createContext, useReducer, useState,} from 'react';

const data = {
    email : "",
    password : "",
    confirmPassword : "",
    isAccepted : false,
    isLoggedIn : false,
}


const loginReducer = (state,action) => {
   return {...state,...action}
}

export const LoginContext =createContext();

const LoginContextProvider = ({children}) => {
   
    const [state2,dispatch] = useReducer (loginReducer,data);
    const [errors,setErrors] = useState({});
    const [touched,setTouched] = useState({});
    console.log(errors)
    return (
        <div>
            <LoginContext.Provider value= {{state2,dispatch,errors,setErrors,touched,setTouched}}>
                {children}
            </LoginContext.Provider>
        </div>
    );
};

export default LoginContextProvider;