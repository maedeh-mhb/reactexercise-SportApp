/*import React, { Component } from 'react';*/
import React, {useState} from 'react';
import styles from "./Package.module.css";
import up from "../images/up.png";
import down from "../images/down.png";


const Package = (props) => {

    const [data,setData]=useState({month:1, pluralActive:false,})
    const{image,name,price}=props;

    const upHandler=()=>{
        if(data.month<12){setData(prevData=>({month:prevData.month+1, pluralActive:true}))}
    }

    const downHandler=()=>{
        if(data.month>2 ){setData((prevData)=>({...data,month:prevData.month-1}))}
        else if(data.month===2){setData((prevData)=>({month:prevData.month-1, pluralActive:false}))}
    }

    return (
        <div className={styles.container}>
           <img src={image} alt="package"/>
                <span className={styles.name}>{name}</span>
                <div className={styles.time}>
                    <h1>Buy Now<br/> {`${data.month * Number(price.split(" ")[0])}$`}</h1> 
                    <span className={styles.counter}>
                        <img className={!data.pluralActive && styles.deactive} src={down} alt="down" onClick={downHandler}/>
                        <span>{data.pluralActive?<p>{data.month} Month<span className={styles.lowerCase}>s</span></p>:<p>{data.month} Month</p>} </span>
                        <img src={up} alt="up" onClick={upHandler}/>
                    </span>
                </div>
        </div>
    );
};

export default Package;

