import React, { Component } from 'react';
import { Menu } from "./Components";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    this.logInOrOut = this.logInOrOut.bind(this);
  }

  logInOrOut() {
    this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
  }

  render() {
    return (
      <Menu isLoggedIn={this.state.isLoggedIn} changeLoginFunc={this.logInOrOut} />
    );
  }
}

export default App;
