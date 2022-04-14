import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Experiences from "./Components/Experiences";
import Publications from "./Components/Publications";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Home from "./Components/Home";


const App = () => {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Experiences/>
      <Projects/>
      <Publications/>
    </div>
    // <Router>
    //   <NavBar/>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/">
    //         <About/>
    //         <Experiences/>
    //         <Publications/>
    //         <Projects/>
    //       </Route>
    //       <Route exact path="/about" />
    //       <Route path="/experiences" />
    //       <Route path="/publications" />
    //       <Route path="/projects"/>
    //       <Route path="/honorsawards"/>
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default App;
