import React, { Component } from 'react';
import styles from "./Packages.module.css";
import Package from './Package';
import yin from "../images/yin.jpg";
import meditation from "../images/meditation.jpg";
import areal from "../images/areal.jpg";
import balance from "../images/balance.jpg";


class Packages extends Component {
    constructor(){super();
    this.state={
        packageData:[
        {id:1, image:yin, name:"YIN YOGA", price:"250 $"},
        {id:2, image:balance, name:"MID-WEEK BALANCING FLOW", price:"250 $"},
        {id:3, image:meditation, name:"MEDITATION WITH NATALIA",  price:"200 $"},
        {id:4, image:areal, name:"POWER VINYASA",  price:"200 $"}
        ]
    }}
    render() {
        return (
            <div>
            <h1 className={styles.plan}>Upcoming Live Classes</h1>
            <div className={styles.packageContainer}>
                {this.state.packageData.map(item=><Package key={item.id} image={item.image} name={item.name} price={item.price}/>)}
            </div>
            </div>
        );
    }
}

export default Packages;