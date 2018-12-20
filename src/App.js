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
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React?
          </a>
           {/* BEGIN */}
          <Link className="link" to="/">
            Page One
          </Link>
          <Link className="link" to="/second-page">
            Page Two
          </Link>
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
