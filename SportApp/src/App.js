import React, { Component } from 'react';
import Banner from "./components/Banner";
import Landing from './components/Landing'; 
import { Route, Switch } from 'react-router-dom';
import Collections from './components/Collections';


class App extends Component {
  render() {
    return (
      <div>
        <Banner/>
           <Switch>
              <Route path="/collections" component={Collections} />
              <Route path="/" component={Landing} />
           </Switch >
      </div>

    );
  }
}

export default App;