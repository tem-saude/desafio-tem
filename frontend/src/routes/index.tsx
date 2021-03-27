import React from 'react';
import {Switch, Route} from 'react-router-dom'
import WelcomePage from '../pages/Welcome'


const Routes:React.FC = () =>{
  return(
    <>
      <Switch>
        <Route path="/" exact component={WelcomePage}/>
      </Switch>
    </>
  )
}


export default Routes;
