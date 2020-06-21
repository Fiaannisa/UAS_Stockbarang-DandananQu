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
//import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mahasiswa" component={ListComp} />
        {/*<Route exact path="/detail/:id" component={DetailComp} /> */}
      </Switch>
    </BrowserRouter>


  );
}

export default App;
