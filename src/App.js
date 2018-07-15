import React, { Component } from 'react';
import { Menu, BookList } from "./Components";
import books from "./SimulatedData";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      books
    };

    this.logInOrOut = this.logInOrOut.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  logInOrOut() {
    this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
  }

  deleteBook(uuid) {
    const newBook = this.state.books.filter(book => book.uuid !== uuid);
    this.setState({ books: newBook });
  }

  render() {
    const { isLoggedIn, books } = this.state;
    return (
      <div>
        <Menu isLoggedIn={isLoggedIn} changeLoginFunc={this.logInOrOut} />
        <br />
        <h1 className="ui header center aligned">Second Treasures Bookstore in React</h1>
        <br />
        <BookList isLoggedIn={isLoggedIn} listOfBooks={books} deleteFunc={this.deleteBook} />
      </div>
    );
  }
}

export default App;
