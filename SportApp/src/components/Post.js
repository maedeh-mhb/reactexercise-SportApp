import React, { Component } from 'react';
import styles from "./Post.module.css";

class Post extends Component {
    render() {
        const {image, title}=this.props;
        return (
            <div className={styles.container}>
                <img src={image} alt="post"/>
                <span>
                    <h2>{title}</h2>
        
                </span>
            </div>
        );
    }
}

export default Post;