import React, {useEffect, useContext} from 'react';
import Styles from './SignUp.module.css'
import { validate } from '../helper/validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import { Link,useHistory } from 'react-router-dom';
import { LoginContext } from '../context/LoginContextProvider';
import MainNavbar from './MainNavbar';

const Login = () => {

    const {state,dispatch,errors,setErrors,touched,setTouched} = useContext(LoginContext);
   const history=useHistory();

    useEffect(()=>{
        setErrors(validate(state,"login"));
    },[state,setErrors],[touched])

    const focusHandler=(event)=>{
        setTouched({...touched,[event.target.name]:true})
    }

    const changeHandler=(event)=>{   
     dispatch({...state, [event.target.name]:event.target.value})   
    }

   const submitHandler=(event)=>{
     event.preventDefault();
     if (!Object.keys(errors).length){
        notify("You are logged in successfully!","success")
        dispatch ({...state, isLoggedIn :true})
        history.push("/")
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
            {!state.isLoggedIn &&
        <div className={Styles.container}>
            <h3 className={Styles.header}>Login</h3>
           <form className={Styles.formContainer}>
               <div  className={Styles.formField}>
                     <label>Email</label>
                     <input  className={errors.email &&  touched.email?Styles.incomplete:Styles.formInput}  type="text" name="email" value={state.email} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.email &&  touched.email && <span>{errors.email}</span>}
               </div>

               <div className={Styles.formField}>
                     <label>Password</label>
                     <input className={errors.password && touched.password?Styles.incomplete:Styles.formInput} type="text" name="password" value={state.password} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className={Styles.formButtons}>
                    <button type="submit" onClick={submitHandler}>Login</button>
                    <span>Are You A Member? <Link to="signup">SignUp</Link></span>
                </div>
           </form>
          
        <ToastContainer toastStyle={{ backgroundColor: "rgb(32, 6, 48)", fontSize:"12px" , color:"white"}} />
        </div> }
        </div>
    );
    
};

export default Login;