import React, { Component } from 'react';
import axios from "axios"
import Post from './Post';
import Styles from './Collections.module.css';

class Collections extends Component {
    constructor(props){
        super(props);
        this.state={products:[]}
    }
    componentDidMount(){
            axios.get(' https://wger.de/api/v2/exerciseimage')
            .then(response=>this.setState({products:response.data.results}))
    }
    render() {
        const {products}=this.state;
        return (
            <div className={Styles.container}>
                {products.length?products.map(product=><Post key={product.id} image={product.image}  />):<h1>Loading...</h1>}
                {}
            </div>
        );
    }
}

export default Collections;