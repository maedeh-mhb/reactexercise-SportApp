import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../context/LoginContextProvider'
import Styles from './SignUp.module.css'
import { validate } from '../helper/validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import { Link,useHistory } from 'react-router-dom';
import MainNavbar from './MainNavbar';

const SignUp = () => {
    
    const {state2,dispatch,errors,setErrors,touched,setTouched} = useContext(LoginContext);
    const history = useHistory();

    useEffect(()=>{
        setErrors(validate(state2,"signUp"));
    },[state2,setErrors],[touched])
    
    const changeHandler = (event) =>{
        if (event.target.name === "isAccepted") {
            dispatch ({...state2,
            [event.target.name]: event.target.checked})
        }
        else {dispatch ({...state2, [event.target.name]:event.target.value
        })}
    }

    const focusHandler =(event) =>{
        setTouched({...touched,[event.target.name]:true})
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        if (!Object.keys(errors).length) {
          notify("You are signed up successfully!","success")
          dispatch ({...state2, isLoggedIn :true})
          history.push("/")
    }
        else {
          notify("please insert your information correctly!")
             setTouched ({
                 name:true,
                 email:true,
                 password:true,
                 confirmPassword:true,
                 isAccepted:true,
                 isLoggedIn :false,
             })
        }
    } 

    return (
        
        <div className={Styles.outerContainer}>    
             <MainNavbar />
             {!state2.isLoggedIn && 
        <div className={Styles.container}>
            <h3 className={Styles.header}>Sign Up</h3>
           <form className={Styles.formContainer}>
               <div  className={Styles.formField}>
                     <label>Email</label>
                     <input  className={errors.email &&  touched.email?Styles.incomplete:Styles.formInput}  type="text" name="email" value={state2.email} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.email &&  touched.email && <span>{errors.email}</span>}
               </div>

               <div className={Styles.formField}>
                     <label>Password</label>
                     <input className={errors.password && touched.password?Styles.incomplete:Styles.formInput} type="password" name="password" value={state2.password} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className={Styles.formField} >
                     <label>Confirm Password</label>
                     <input  className={errors.confirmPassword && touched.confirmPassword?Styles.incomplete:Styles.formInput} type="password" name="confirmPassword" value={state2.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className={Styles.checkboxContainer}>
                    <div className={Styles.checkbox}>
                    <label>I Accept Terms Of Privacy Policy</label>
                    <input  type="checkbox" name="isAccepted" value={state2.isAccepted} onChange={changeHandler}/>
                    </div>
                    {errors.isAccepted  && <span>{errors.isAccepted}</span>}
                </div>

                <div className={Styles.formButtons}>
                <button type="submit" onClick={submitHandler}> Sign Up</button>
                    <span>Do You Have An Account?<Link to="/login"> Login</Link></span>
                </div>
           </form>
           <ToastContainer toastStyle={{ backgroundColor: "rgb(32, 6, 48)", fontSize:"12px" , color:"white"}} />
        </div>}
        </div>
    );
};

export default SignUp;