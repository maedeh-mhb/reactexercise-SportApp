import React, { Component } from 'react';
import styles from "./Posts.module.css";
import Post from "./Post.js";
import power from "../images/power.jpg";
import yoga from "../images/yoga.jpg";
import crosstraining from "../images/crosstraining.jpg";
import sweat from "../images/sweat.jpg";

class posts extends Component {
    constructor(){super();
    this.state={
        postData:[
            {id:5, image:power, title:"Harness The Power Of Your Cycle", number:"12 workouts.All Levels "},
            {id:6, image:yoga, title:"Enhance Your Training With Yoga", number:"6 workouts.All Levels "},
            {id:7, image:crosstraining, title:"Cross-Training To Master Your Class", number:"10 workouts.Beginner & Intermediate " },
            {id:8, image:sweat, title:"Get The More Sweat For Your Session", number:"10 workouts.Intermediate & Advanced "}
        ]
    }}
    render() {
        return (
            <div>
            <h1 className={styles.plan}>Pick Your Plan</h1>
            <div className={styles.postContainer}>
               {this.state.postData.map(item=><Post key={item.id} image={item.image} title={item.title} number={item.title}/>)}
            </div>
            </div>
        );
    }
}

export default posts;