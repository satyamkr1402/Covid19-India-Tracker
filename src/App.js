import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import CovidApp from "./components/CovidApp";
import Navbar from "./components/Navbar";
import Paper from "./components/Paper";

import Symptoms from "./components/Symptoms";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
    this.setDarkMode = this.setDarkMode.bind(this);
  }

  setDarkMode(e) {
    this.setState({ isDarkMode: e.target.checked });
  }

  render() {
    const { isDarkMode } = this.state;
    return (
      <Paper isDarkMode={this.state.isDarkMode}>
        <div className="root">
          <div className="navBar">
            <Navbar isDarkMode={isDarkMode} />
          </div>
          <div className="mainContent">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <CovidApp
                    setDarkMode={this.setDarkMode}
                    isDarkMode={this.state.isDarkMode}
                  />
                )}
              />
              <Route
                exact
                path="/symptoms"
                render={() => <Symptoms isDarkMode={isDarkMode} />}
              />
              <Route
                path="/"
                render={() => (
                  <CovidApp
                    setDarkMode={this.setDarkMode}
                    isDarkMode={this.state.isDarkMode}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Paper>
    );
  }
}

export default App;
