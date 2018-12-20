import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// BEGIN
import { Route, Link } from "react-router-dom";
import PageOne from "./components/routes/pageOne"
import PageTwo from "./components/routes/pageTwo"
// END
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
           {/* BEGIN */}
           <div className="link-flex"> 
          <Link className="link" to="/">
            Page One
          </Link>
          <Link className="link" to="/second-page">
            Page Two
          </Link>
          </div>
           {/* END */}
        </header>
        {/* BEGIN */}
        <main>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/second-page" component={PageTwo} />
        </main>
        {/* END */}
      </div>
    );
  }
}

export default App;
