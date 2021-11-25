import React, { Component } from 'react';
import styles from "./Posts.module.css";
import Post from "./Post.js";
import yinTeacher from "../images/yinteacher.jpg";
import acro from "../images/acro.jpg";
import tropical from "../images/tropical.jpg";
import luxury from "../images/200HR.jpg";

class posts extends Component {
    constructor(){super();
    this.state={
        postData:[
            {id:5, image:yinTeacher, title:"YIN YOGA TEACHER TRAINING"},
            {id:6, image:acro, title:"ACRO YOGA TEACHER TRAINING"},
            {id:7, image:tropical, title:"TROPICAL 200HR YOGA TEACHER TRAINING" },
            {id:8, image:luxury, title:"LUXURY 200HR YOGA TEACHER TRAINING",}
        ]
    }}
    render() {
        return (
            <div>
            <h1 className={styles.plan}>Yoga Teacher Training</h1>
            <div className={styles.postContainer}>
               {this.state.postData.map(item=><Post key={item.id} image={item.image} title={item.title} number={item.title}/>)}
            </div>
            </div>
        );
    }
}

export default posts;