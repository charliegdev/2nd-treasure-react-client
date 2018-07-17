import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class NewBook extends Component {
  constructor(props) {
    super(props);
    this.emptyBook = {
      title: "",
      author: "",
      genre: "",
      price: "",
      isbn: ""
    };
    this.state = {
      savedBook: {},
      newBookInProgress: { ...this.emptyBook },
    };

    this.onNewFieldUpdate = this.onNewFieldUpdate.bind(this);
    this.saveNewBook = this.saveNewBook.bind(this);
  }

  onNewFieldUpdate(event) {
    const changedBook = { ...this.state.newBookInProgress, [event.target.name]: event.target.value };
    this.setState({ newBookInProgress: changedBook });
  }

  saveNewBook(event) {
    event.preventDefault();
    this.setState({ savedBook: { ...this.state.newBookInProgress } }, () => {
      this.props.addNewBookFunc(this.state.savedBook);
      this.setState({ newBookInProgress: { ...this.emptyBook } })
    });
  }

  render() {
    const { children, isLoggedIn } = this.props;
    const { title, author, genre, price, isbn } = this.state.newBookInProgress;
    if (!isLoggedIn) return null;
    return (
      <div className="ui form raised segment">
        <h2 className="ui header">
          {children}
          <div className="sub header">All fields are required</div>
        </h2>

        <form onSubmit={this.saveNewBook} className="fields">
          <div className="four wide field required">
            <label>Title</label>
            <input type="text" name="title" value={title} onChange={this.onNewFieldUpdate} />
          </div>
          <div className="three wide field required">
            <label>Author</label>
            <input type="text" name="author" value={author} onChange={this.onNewFieldUpdate} />
          </div>
          <div className="three wide field required">
            <label>Genre</label>
            <input type="text" name="genre" value={genre} onChange={this.onNewFieldUpdate} />
          </div>
          <div className="two wide field required">
            <label>Price</label>
            <input type="text" name="price" value={price} onChange={this.onNewFieldUpdate} />
          </div>
          <div className="two wide field required">
            <label>ISBN</label>
            <input type="text" name="isbn" value={isbn} onChange={this.onNewFieldUpdate} />
          </div>
          <div className="two wide field">
            <label>Action</label>
            <button className="positive ui button" type="submit">Create</button>
          </div>
        </form>
      </div>
    );
  }
}

NewBook.propTypes = {
  children: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  addNewBookFunc: PropTypes.func.isRequired
};
