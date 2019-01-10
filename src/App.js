import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// BEGIN
import { Route, Link } from "react-router-dom";
import PageOne from "./components/routes/pageOne"
import PageTwo from "./components/routes/pageTwo"
import PageThree from "./components/routes/pageThree"
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
            Page 1
          </Link>
          <Link className="link" to="/second-page">
            Page 2
          </Link>
          <Link className="link" to="/third-page">
            Page 3
          </Link>
          </div>
           {/* END */}
        </header>
        {/* BEGIN */}
        <main>
          <Route exact path="/" component={PageOne} />
          <Route exact path="/second-page" component={PageTwo} />
          <Route exact path="/third-page" component={PageThree} />
        </main>
        {/* END */}
      </div>
    );
  }
}

export default App;
