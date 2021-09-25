import React, { Component } from 'react';
import styles from "./Packages.module.css";
import Package from './Package';
import crossfit from "../images/crossfit.jpg";
import trx from "../images/trx.jpg";
import pilates from "../images/pilates.jpg";
import yogaa from "../images/yogaa.jpg";


class Packages extends Component {
    constructor(){super();
    this.state={
        packageData:[
        {id:1, image:crossfit, name:"Crossfit", price:"250 $"},
        {id:2, image:trx, name:"Trx", price:"250 $"},
        {id:3, image:pilates, name:"Pilates",  price:"200 $"},
        {id:4, image:yogaa, name:"Yoga",  price:"200 $"}
        ]
    }}
    render() {
        return (
            <div>
            <h1 className={styles.plan}>Personal Training Packages</h1>
            <div className={styles.packageContainer}>
                {this.state.packageData.map(item=><Package key={item.id} image={item.image} name={item.name} price={item.price}/>)}
            </div>
            </div>
        );
    }
}

export default Packages;