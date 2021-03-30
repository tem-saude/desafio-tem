import React from 'react';
import {Switch, Route} from 'react-router-dom'
import WelcomePage from '../pages/Welcome'
import HomePage from '../pages/Home'
import Register from '../pages/Register';
import Appointments from '../pages/Appointments'
import Appointment from '../pages/Appointment'

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
