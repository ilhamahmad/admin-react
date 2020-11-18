import React from 'react';
import Aside from './components/aside/aside';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
function App() {
  return (
    <Router>
      <Nav />
      <Aside />
      <Switch>

        {/* <Route exact path="/" component={Main} /> */}
        
      </Switch>
      <Footer />
      <NotificationContainer/>
    </Router>
  );
}

export default App;
