import React, {useEffect, useState} from 'react';
import Styles from './SignUp.module.css'
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';



const SignUp = (props) => {

    const [data,setData]=useState({
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    })
    
    const [errors,setErrors]=useState({});
    const [touched,setTouched]=useState({});
    

    useEffect(()=>{
        setErrors(validate(data,"signup"));
    },[data],[touched])

    const focusHandler=(event)=>{
        setTouched({...touched,[event.target.name]:true})
    }

    const changeHandler=(event)=>{
            if (event.target.name === "isAccepted"){
                setData({...data, [event.target.name]:event.target.checked})
            }
            else {
                setData({...data, [event.target.name]:event.target.value})
            }
            
    }

   const submitHandler=(event)=>{
     event.preventDefault();
     if (!Object.keys(errors).length){
        notify("You are signed up successfully!","success")
     }
     else{
         notify("please insert your information correctly!")
         setTouched({
          name:true,
          email:true,
          password:true,
          confirmPassword:true,
          isAccepted:true,
      })
     }
   }
  

    return (
        <div className={Styles.container}>
            <h3 className={Styles.header}>Sign Up</h3>
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

                <div className={Styles.formField} >
                     <label>Confirm Password</label>
                     <input  className={errors.confirmPassword && touched.confirmPassword?Styles.incomplete:Styles.formInput} type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                     {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>

                <div className={Styles.checkboxContainer}>
                    <div className={Styles.checkbox}>
                    <label>I Accept Terms Of Privacy Policy</label>
                    <input  type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler}/>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>

                <div className={Styles.formButtons}>
                <button type="submit" onClick={submitHandler}> Sign Up</button>
                    <span>Do You Have An Account?<span className={Styles.log} onClick={props.statusHandler}> Login</span></span>
                </div>
           </form>
           <ToastContainer toastStyle={{ backgroundColor: "rgb(32, 6, 48)", fontSize:"12px" , color:"white"}} />
        </div>
    );
};

export default SignUp;