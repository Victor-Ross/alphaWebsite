import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Lines from './pages/lines';
import History from './pages/history';
import BusRent from './pages/busRent';
import ContactUs from './pages/contactUs';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/lines' component={Lines} />
        <Route path='/history' component={History} />
        <Route path='/busRent' component={BusRent} />
        <Route path='/contact' component={ContactUs} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;