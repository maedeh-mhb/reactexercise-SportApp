import React, {useState} from 'react';
import Styles from './Form.module.css'

const Form = () => {

    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false,
    })
    
    const changeHandler=(event)=>{
            if (event.target.name === "isAccepted"){
                setData({...data, [event.target.name]:event.target.checked})
            }
            else {
                setData({...data, [event.target.name]:event.target.value})
            }
            
    }

    return (
        <div className={Styles.formContainer}>
            <h3>Create Account</h3>
           <form>
               <div>
                      <label>Name</label>
                      <input type="text" name="name" value={data.name} onChange={changeHandler}/>
               </div>

               <div>
                     <label>Email</label>
                     <input type="text" name="email" value={data.email} onChange={changeHandler}/>
               </div>

               <div>
                     <label>Password</label>
                     <input type="text" name="password" value={data.password} onChange={changeHandler}/>
               </div>

                <div>
                     <label>confirmPassword</label>
                     <input type="text" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler}/>
                </div>

                <div>
                    <label>I Accept Terms Of Privacy Policy</label>
                    <input type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler}/>
                </div>

                <div>
                    <a href="#">Login</a>
                    <button type="submit">SignUp</button>
                </div>
           </form>
        </div>
    );
};

export default Form;