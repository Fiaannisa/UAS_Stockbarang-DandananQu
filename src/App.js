import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import logo from './logo.svg';
import Home from './Component/Fungsional/Home';
import Parent from './Component/Class/Parent';
import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import AboutComp from './Component/Fungsional/AboutComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp';
import { Form } from 'reactstrap';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>


  );
}

export default App;
