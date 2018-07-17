import React, { Component } from 'react';
import uuidv4 from "uuid/v4";
import Menu from "./Components/Menu";
import BookList from "./Components/BookList";
import NewBook from "./Components/NewBook";
import books from "./SimulatedData";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      books,
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.saveEditedBook = this.saveEditedBook.bind(this);
    this.addNewBook = this.addNewBook.bind(this);
  }

  login() {
    this.setState({ isLoggedIn: true });
  }

  logout() {
    this.setState({ isLoggedIn: false });
  }

  deleteBook(uuid) {
    const newBook = this.state.books.filter(book => book.uuid !== uuid);
    this.setState({ books: newBook });
  }

  saveEditedBook(editedBookRecord) {
    // Can't use filter because I need to retain the order.
    const updatedBookList = this.state.books.map(book => {
      return book.uuid === editedBookRecord.uuid ?
        editedBookRecord : book
    });
    this.setState({ books: updatedBookList });
  }

  addNewBook(newBookRecord) {
    // Normally we generate UUID on the server side. Since this application has no server side, have to
    // do it on the client side.
    const newBooks = [...this.state.books, { ...newBookRecord, uuid: uuidv4() }];
    this.setState({ books: newBooks });
  }

  render() {
    const { isLoggedIn, books } = this.state;
    return (
      <div>
        <Menu isLoggedIn={isLoggedIn} loginFunc={this.login} logoutFunc={this.logout} />
        <div className="ui container">
          <br />
          <h1 className="ui header center aligned">Second Treasures Bookstore in React</h1>
          <br />
          <BookList isLoggedIn={isLoggedIn} listOfBooks={books} deleteFunc={this.deleteBook} saveFunc={this.saveEditedBook} />
          <NewBook isLoggedIn={isLoggedIn} addNewBookFunc={this.addNewBook}>Add a New Book</NewBook>
        </div>
      </div>
    );
  }
}

export default App;
