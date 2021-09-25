import React, { Component } from 'react';
import Posts from './Posts';
import Packages from './Packages';

class Landing extends Component {
    render() {
        return (
            <div>
                <Posts/>
                <Packages/>
            </div>
        );
    }
}

export default Landing;