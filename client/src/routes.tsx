import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Home } from './components/Home';
import { RegisterForm } from './components/RegisterForm';


export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/agendar" component={RegisterForm} />
      </Switch>
    </BrowserRouter>
  );
}