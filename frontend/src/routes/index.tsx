import React from 'react';
import {Switch, Route} from 'react-router-dom'
import WelcomePage from '../pages/Welcome'
import HomePage from '../pages/Home'
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard'

const Routes:React.FC = () =>{
  return(
    <>
      <Switch>
        <Route path="/" exact component={WelcomePage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
    </>
  )
}


export default Routes;
