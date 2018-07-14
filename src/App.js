import React, { Component } from 'react';
import { Menu, BookList } from "./Components";
import books from "./SimulatedData";
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
    const { isLoggedIn } = this.state;
    return (
      <div>
        <Menu isLoggedIn={isLoggedIn} changeLoginFunc={this.logInOrOut} />
        <br />
        <h1 className="ui header center aligned">Second Treasures Bookstore in React</h1>
        <br />
        <BookList isLoggedIn={isLoggedIn} data={books} />
      </div>
    );
  }
}

export default App;
