import React, { Component } from 'react';
import styles from "./Package.module.css";
import up from "../images/up.png";
import down from "../images/down.png";

class Package extends Component {
    constructor(){super();
    this.state={duration:1,
    isActive:false,
    isClicked:false
    }}

    upHandler=()=>{
        if(this.state.duration<12){this.setState((prevState)=>({duration:prevState.duration+1}))}
        this.setState({isActive:true})
    }

    downHandler=()=>{
        if(this.state.duration>2 ){this.setState((prevState)=>({duration:prevState.duration-1}))
    }

        else if(this.state.duration===2){this.setState((prevState)=>({duration:prevState.duration-1}))
        this.setState({isActive:false})
        }}
    
    render() {
        const{image,name,price}=this.props;
        const{duration,isActive}=this.state;
        
        return (
            <div className={styles.container}>
                <img src={image} alt="package"/>
                <span className={styles.name}>{name}</span>
                <div className={styles.time}>
                    <h1>Buy Now<br/> {isActive? `${duration * Number(price.split(" ")[0])}$`:`${price}`}</h1> 
                    <span className={styles.counter}>
                        <img className={isActive?"":styles.deactive} src={down} alt="up" onClick={this.downHandler}/>
                        <span>{isActive?<p>{duration} Month<span className={styles.lowerCase}>s</span></p>:<p>{duration} Month</p>} </span>
                        <img src={up} alt="up" onClick={this.upHandler}/>
                    </span>
                </div>
            </div>
        );
    }
}

export default Package;