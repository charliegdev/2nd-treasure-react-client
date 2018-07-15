import React, { Component } from 'react';
import Menu from "./Components/Menu";
import ViewBookList from "./Components/ViewComponents";
import books from "./SimulatedData";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isEditMode: false,
      books
    };

    this.logInOrOut = this.logInOrOut.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.flipEditMode = this.flipEditMode.bind(this);
  }

  logInOrOut() {
    this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
  }

  deleteBook(uuid) {
    const newBook = this.state.books.filter(book => book.uuid !== uuid);
    this.setState({ books: newBook });
  }

  flipEditMode() {
    console.log("Flipping edit mode...");
    this.setState(prevState => ({ isEditMode: !prevState.isEditMode }));
  }

  render() {
    const { isLoggedIn, books } = this.state;
    return (
      <div>
        <Menu isLoggedIn={isLoggedIn} changeLoginFunc={this.logInOrOut} />
        <br />
        <h1 className="ui header center aligned">Second Treasures Bookstore in React</h1>
        <br />
        <ViewBookList isLoggedIn={isLoggedIn} listOfBooks={books} deleteFunc={this.deleteBook} flipEditModeFunc={this.flipEditMode} />
      </div>
    );
  }
}

export default App;
