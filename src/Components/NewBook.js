import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class NewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    };
  }

  render() {
    const { children, isLoggedIn } = this.props;
    if (!isLoggedIn) return null;
    return (
      <div className="ui form raised segment">
        <h2 className="ui header">
          {children}
          <div className="sub header">All fields are required</div>
        </h2>

        <form ng-submit="ctrl.addNewBook(newBook)" className="fields" ng-model="newBook">
          <div className="four wide field required">
            <label>Title</label>
            <input type="text" ng-model="newBook.title" />
          </div>
          <div className="three wide field required">
            <label>Author</label>
            <input type="text" ng-model="newBook.author" />
          </div>
          <div className="three wide field required">
            <label>Genre</label>
            <input type="text" ng-model="newBook.genre" />
          </div>
          <div className="two wide field required">
            <label>Price</label>
            <input type="text" ng-model="newBook.price" />
          </div>
          <div className="two wide field required">
            <label>ISBN</label>
            <input type="text" ng-model="newBook.isbn" />
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
  isLoggedIn: PropTypes.bool.isRequired
};
