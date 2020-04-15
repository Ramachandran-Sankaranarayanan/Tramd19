import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

import Navigation from './components/Navigation';
import SignIn from './components/signin';
import SignUp from './components/signup';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             
             <Route path="/signin" component={SignIn}/>
             <Route path="/signup" component={SignUp}/>
             
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;