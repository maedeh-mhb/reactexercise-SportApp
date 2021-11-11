import React, {useEffect, useContext} from 'react';
import Styles from './SignUp.module.css'
import { validate } from '../helper/validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import { Link } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';
import MainNavbar from './MainNavbar';

const Login = () => {

    const {state2,dispatch,errors,setErrors,touched,setTouched} = useContext(LoginContext);
   
    useEffect(()=>{
        setErrors(validate(state2,"login"));
    },[state2,setErrors],[touched])

    const focusHandler=(event)=>{
        setTouched({...touched,[event.target.name]:true})
    }

    const changeHandler=(event)=>{   
           
                dispatch({...state2, [event.target.name]:event.target.value})
            
    }

   const submitHandler=(event)=>{
     event.preventDefault();
     if (!Object.keys(errors).length){
        notify("You are logged in successfully!","success")
        dispatch ({...state2, isLoggedIn :true})
     }
     else{
         notify("please insert your information correctly!")
         setTouched({
          email:true,
          password:true,
         
      })
     }
   }

    return (
        <div className={Styles.outerContainer}>
            <MainNavbar />
            {!state2.isLoggedIn ?
        <div className={Styles.container}>
            <h3 className={Styles.header}>Login</h3>
           <form className={Styles.formContainer}>
               <div  className={Styles.formField}>
                     <label>Email</label>
                     <input  className={errors.email &&  touched.email?Styles.incomplete:Styles.formInput}  type="text" name="email" value={state2.email} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.email &&  touched.email && <span>{errors.email}</span>}
               </div>

               <div className={Styles.formField}>
                     <label>Password</label>
                     <input className={errors.password && touched.password?Styles.incomplete:Styles.formInput} type="text" name="password" value={state2.password} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className={Styles.formButtons}>
                    <button type="submit" onClick={submitHandler}>Login</button>
                    <span>Are You A Member? <Link to="signup">SignUp</Link></span>
                </div>
           </form>
          
        <ToastContainer toastStyle={{ backgroundColor: "rgb(32, 6, 48)", fontSize:"12px" , color:"white"}} />
        </div> :<div className={Styles.login}>
            <h1>You Are Logged In ! </h1>
           <Link to="/">Back To Home </Link>
            </div> }
        </div>
    );
    
};

export default Login;