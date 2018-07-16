import React, { Component } from "react";
import PropTypes from 'prop-types';

class BookItem extends Component {
  constructor(props) {
    super(props);
    // const { isLoggedIn, deleteFunc, flipEditModeFunc, onChangeFunc, bookInfo } = props;
    const { bookInfo } = props;

    this.state = {
      bookInfo,
      editedBookInProgress: { ...bookInfo },
      isEditMode: false
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
    this.enableEditMode = this.enableEditMode.bind(this);
    this.disableEditMode = this.disableEditMode.bind(this);
  }

  enableEditMode() {
    this.setState({ isEditMode: true });
  }

  disableEditMode() {
    this.setState({ isEditMode: false });
  }

  onFieldChange(event, field) {
    this.setState({ editedBookInProgress: {
      ...this.state.editedBookInProgress,
      [field]: event.target.value
    }});
  }

  saveEdit() {
    this.setState({ 
      bookInfo: { ...this.state.editedBookInProgress },
      isEditMode: false
    }, () => { 
      this.props.saveFunc(this.state.bookInfo)
    });
  }

  render() {
    const { isLoggedIn, deleteFunc } = this.props;
    const { editedBookInProgress, isEditMode } = this.state;
    const { title, author, genre, price, isbn, uuid } = editedBookInProgress;
    const editModeMarkup = (
      <tr className="repeated-item">
        <td><div className="ui input mini"><input type="text" value={title} onChange={event => this.onFieldChange(event, "title")} /></div></td>
        <td className="single line"><div className="ui input mini"><input type="text" value={author} onChange={event => this.onFieldChange(event, "author")} /></div></td>
        <td><div className="ui input mini"><input type="text" value={genre} onChange={event => this.onFieldChange(event, "genre")} /></div></td>
        <td><div className="ui input mini"><input type="text" value={price} onChange={event => this.onFieldChange(event, "price")} /></div></td>
        <td><div className="ui input mini"><input type="text" value={isbn} onChange={event => this.onFieldChange(event, "isbn")} /></div></td>
        <td><button className="yellow ui button" onClick={this.saveEdit}>Update</button></td>
        <td><button className="negative ui button" onClick={deleteFunc.bind(undefined, uuid)}>Delete</button></td>
      </tr>
    );

    const viewModeMarkup = (
      <tr className="repeated-item">
        <td>{title}</td>
        <td className="single line">{author}</td>
        <td>{genre}</td>
        <td>${price}</td>
        <td>{isbn}</td>
        {isLoggedIn && <td><button className="yellow ui button" onClick={this.enableEditMode}>Update</button></td>}
        {isLoggedIn && <td><button className="negative ui button" onClick={deleteFunc.bind(undefined, uuid)}>Delete</button></td>}
      </tr>
    );

    return (isEditMode && isLoggedIn) ? editModeMarkup : viewModeMarkup;
  }
}

BookItem.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  bookInfo: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  saveFunc: PropTypes.func.isRequired
};

export default BookItem;