import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Footer from './components/footer';
import Header from './components/header';

import Menu from './components/menu';

import AboutUs from './view/aboutUs';
import ContactUs from './view/contactUs';
import Home from './view/home';

import './assets/css/app.scss';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const menuOptions = [
  {
    link: '/',
    name: 'Home',
    icon: faHouse,
    page: <Home />
  },
  {
    link: '/AboutUs',
    name: 'About Us',
    icon: faSun,
    page: <AboutUs />
  },
  {
    link: '/contactUs',
    name: 'Contact Us',
    icon: faPaperPlane,
    page: <ContactUs />
  }
]

const App = () => {
  return (
    <Router>
      <Menu menuOptions={menuOptions}/>
      <Switch>
        {menuOptions.map((list: any, i: any) => (
          <Route key={i} exact path={list.link}>
            <Header 
              namePage={list.name} 
              link={list.link}
              icon={list.icon}
            />
            {list.page}
          </Route>
        ))}
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
