import React, { Component } from "react"
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom"
import { PageOne } from "../views/pages/PageOne"
import { PageTwo } from "../views/pages/PageTwo"
import { Footer } from "../views/components/Footer"
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1> Header </h1>
          <Link to="/">home</Link>
          <br />
          <Link to="/pagetwo">Page two</Link>
          <Switch>
            <Route exact path="/" component={PageOne} />
            <Route exact path="/pagetwo" component={PageTwo} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
