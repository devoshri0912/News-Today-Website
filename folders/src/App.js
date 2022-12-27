//import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import React, {useState} from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {

  const [mode,setmode]=useState("light")
  const togglemode=()=>
  {
    if(mode==="light")
    {
    setmode("dark")
    document.body.style.backgroundColor='black'
    }
    else
    {
    setmode("light");
    document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="devoshree" mode={mode} togglemode={togglemode}/>
    <div className={`container text-${mode==='light'?'black':'white'}`}>
      <h1>hello</h1>
      <Switch>
          <Route exact path="/about">
            <About mode={mode} togglemode={togglemode}/>
          </Route>
          <Route exact path="/" exact={true} >
          <Textform heading="write your text here" mode={mode} togglemode={togglemode}/ >
          </Route>
        </Switch>
   
    </div>
    </Router>
    </>
  );
}

export default App;
