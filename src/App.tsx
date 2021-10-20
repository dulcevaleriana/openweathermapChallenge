import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import AboutUs from './view/aboutUs';
import ContactUs from './view/contactUs';
import Home from './view/home';

const menuOptions = [
  {
    link: '/',
    name: 'Home',
    // icon: faHouseUser,
    page: <Home />
  },
  {
    link: '/AboutUs',
    name: 'About Us',
    // icon: faHouseUser,
    page: <AboutUs />
  },
  {
    link: '/contactUs',
    name: 'Contact Us',
    // icon: faHouseUser,
    page: <ContactUs />
  }
]

const App = () => {
  return (
    <Router>
      {/* menu */}
      <Switch>
        {menuOptions.map((list: any, i: any) => (
          <Route key={i} exact path={list.link}>
            {list.page}
          </Route>
        ))}
      </Switch>
      {/* footer */}
    </Router>
  );
}

export default App;
