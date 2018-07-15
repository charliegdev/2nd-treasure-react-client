import React, { Component } from 'react';
import Menu from "./Components/Menu";
import ViewBookList from "./Components/ViewComponents";
import EditBookList from "./Components/EditComponents";
import books from "./SimulatedData";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isEditMode: false,
      books,
      bookInEdit: {}
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.enableEditMode = this.enableEditMode.bind(this);
    this.disableEditAndSave = this.disableEditAndSave.bind(this);
  }

  login() {
    this.setState({ isLoggedIn: true });
  }
  
  logout() {
    this.setState({ isLoggedIn: false, isEditMode: false });
  }

  deleteBook(uuid) {
    const newBook = this.state.books.filter(book => book.uuid !== uuid);
    this.setState({ books: newBook });
  }

  enableEditMode() {
    this.setState({ isEditMode: true });
  }

  disableEditAndSave(editedBookRecord) {
    // Can't use filter because I need to retain the order.
    const updatedBookList = this.state.books.map(book => {
      return book.uuid === editedBookRecord.uuid ?
        editedBookRecord : book
    });
    this.setState({
      isEditMode: false,
      books: updatedBookList
    });
  }

  cacheNewBookRecord(event) {
    this.setState({ bookInEdit: event.target.value });
  }

  render() {
    const { isLoggedIn, isEditMode, books } = this.state;
    return (
      <div>
        <Menu isLoggedIn={isLoggedIn} loginFunc={this.login} logoutFunc={this.logout} />
        <br />
        <h1 className="ui header center aligned">Second Treasures Bookstore in React</h1>
        <br />
        {isEditMode ? 
          <EditBookList isLoggedIn={isLoggedIn} listOfBooks={books} deleteFunc={this.deleteBook} disableEditAndSaveFunc={this.disableEditAndSave} onChangeFunc={this.cacheNewBookRecord} />
          :
          <ViewBookList isLoggedIn={isLoggedIn} listOfBooks={books} deleteFunc={this.deleteBook} enableEditModeFunc={this.enableEditMode} />
        }
      </div>
    );
  }
}

export default App;
