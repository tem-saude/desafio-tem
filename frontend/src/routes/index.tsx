import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Appointment from '../pages/Appointment';
import Appointments from '../pages/Appointments';
import HomePage from '../pages/Home';
import Register from '../pages/Register';
import WelcomePage from '../pages/Welcome';

const Routes:React.FC = () =>{
  return(
    <>
      <Switch>
        <Route path="/" exact component={WelcomePage}/>
        <Route path="/home" component={HomePage}/>
        <Route path="/register" component={Register}/>
        <Route path="/appointments" component={Appointments}/>
        <Route path="/appointment/:id" component={Appointment}/>
      </Switch>
    </>
  )
}


export default Routes;
