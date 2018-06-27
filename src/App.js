import React, { Component } from 'react';
import './App.css';
import AppSc from './App.scss';
import Main from './Home/Main/Main';
import Login from './Home/login/Login';
import User from './Home/User/User';
import {HashRouter,Route,Link,Redirect} from 'react-router-dom';
class App extends Component {
  render() {
    return (
         <HashRouter>
            <div className={AppSc.App}>
                {/* <Link to="/y/one">one</Link>&nbsp;&nbsp;
                <Link to="/y/two">two</Link>&nbsp;&nbsp; */}
                <Route exact path="/" render={()=><Redirect to="/Login" />}></Route>
                <Route path="/Login" component={Login}></Route>
                <Route path="/Main" component={Main}></Route> 
            </div>
         </HashRouter> 
      
    );
  }
}

export default App;
