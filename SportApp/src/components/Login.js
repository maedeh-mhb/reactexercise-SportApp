import React, {useEffect, useState} from 'react';
import Styles from './SignUp.module.css'
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';


const Login = (props) => {

    const [data,setData]=useState({
        email:"",
        password:"",
       
    })
    
    const [errors,setErrors]=useState({});
    const [touched,setTouched]=useState({});

    useEffect(()=>{
        setErrors(validate(data,"login"));
    },[data],[touched])

    const focusHandler=(event)=>{
        setTouched({...touched,[event.target.name]:true})
    }

    const changeHandler=(event)=>{   
           
                setData({...data, [event.target.name]:event.target.value})
            
    }

   const submitHandler=(event)=>{
     event.preventDefault();
     if (!Object.keys(errors).length){
        notify("You are logged in successfully!","success")
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
        <div className={Styles.container}>
            <h3 className={Styles.header}>Login</h3>
           <form className={Styles.formContainer}>
               <div  className={Styles.formField}>
                     <label>Email</label>
                     <input  className={errors.email &&  touched.email?Styles.incomplete:Styles.formInput}  type="text" name="email" value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.email &&  touched.email && <span>{errors.email}</span>}
               </div>

               <div className={Styles.formField}>
                     <label>Password</label>
                     <input className={errors.password && touched.password?Styles.incomplete:Styles.formInput} type="text" name="password" value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.password && touched.password && <span>{errors.password}</span>}
                </div>

                <div className={Styles.formButtons}>
                    <button type="submit" onClick={submitHandler}>Login</button>
                    <span>Are You A Member? <span className={Styles.log} onClick={props.statusHandler}>SignUp</span></span>
                </div>
           </form>
           <ToastContainer toastStyle={{ backgroundColor: "rgb(32, 6, 48)", fontSize:"12px" , color:"white"}} />
        </div>
    );
};

export default Login;