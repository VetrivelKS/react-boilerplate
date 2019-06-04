import React, { Component } from "react"
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom"
import { Home } from "../views/pages/Home"
import { Game } from "../views/pages/Game"
import { Footer } from "../views/components/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/*<h1> Header </h1>*/}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/game/:gameId" component={Game} />
            {/*<Route exact path="/pagetwo" component={PageTwo} />*/}
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
