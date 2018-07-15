import React, { Component } from "react";
import PropTypes from 'prop-types';

class EditBookItem extends Component {
  constructor(props) {
    super(props);
    // const { isLoggedIn, deleteFunc, flipEditModeFunc, onChangeFunc, bookInfo } = props;
    const { bookInfo } = props;

    this.state = {
      bookInfo,
      editedBookInProgress: { ...bookInfo }
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.saveEdit = this.saveEdit.bind(this);
  }

  onFieldChange(event, field) {
    this.setState({ editedBookInProgress: {
      ...this.state.editedBookInProgress,
      [field]: event.target.value
    }});
  }

  saveEdit() {
    const { editedBookInProgress} = this.state;
    this.setState({ bookInfo: { ...editedBookInProgress } }, 
      () => { 
        this.props.disableEditAndSaveFunc(this.state.bookInfo)
      }
    );
  }

  render() {
    const { isLoggedIn, deleteFunc } = this.props;
    const { editedBookInProgress } = this.state;
    const { title, author, genre, price, isbn, uuid } = editedBookInProgress;
    return (
      <tr className="repeated-item">
        <td><div className="ui input mini"><input type="text" value={title} onChange={event => this.onFieldChange(event, "title")} /></div></td>
        <td className="single line"><div className="ui input mini"><input type="text" value={author} onChange={event => this.onFieldChange(event, "author")} /></div></td>
        <td><div className="ui input mini"><input type="text" value={genre} onChange={event => this.onFieldChange(event, "genre")} /></div></td>
        <td><div className="ui input mini"><input type="text" value={price} onChange={event => this.onFieldChange(event, "price")} /></div></td>
        <td><div className="ui input mini"><input type="text" value={isbn} onChange={event => this.onFieldChange(event, "isbn")} /></div></td>
        {isLoggedIn && <td><button className="yellow ui button" onClick={this.saveEdit}>Update</button></td>}
        {isLoggedIn && <td><button className="negative ui button" onClick={deleteFunc.bind(undefined, uuid)}>Delete</button></td>}
      </tr>
    );
  }
}

EditBookItem.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  bookInfo: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  disableEditAndSaveFunc: PropTypes.func.isRequired,
  onChangeFunc: PropTypes.func.isRequired
};

const EditBookList = ({ isLoggedIn, listOfBooks, deleteFunc, disableEditAndSaveFunc, onChangeFunc }) => {
  return (
    <div className="ui container">
      <h2 className="ui header left aligned"> Edit Books</h2>
      <table className="ui celled padded table violet">
        <thead>
          <tr>
            <th className="single line four wide">Title</th>
            <th className="three wide">Author</th>
            <th className="three wide">Genre</th>
            <th className="two wide">Price</th>
            <th className={isLoggedIn ? "two wide" : "four wide"}>ISBN</th>
            {isLoggedIn && <th className="one wide">Update</th>}
            {isLoggedIn && <th className="one wide">Delete</th>}
          </tr>
        </thead>
        <tbody>{listOfBooks.map(book => 
          <EditBookItem 
            bookInfo={book} 
            key={book.uuid} 
            isLoggedIn={isLoggedIn} 
            deleteFunc={deleteFunc} 
            disableEditAndSaveFunc={disableEditAndSaveFunc} 
            onChangeFunc={onChangeFunc}  
          />)
        }
        </tbody>
      </table>
    </div>
  );
};

EditBookList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  listOfBooks: PropTypes.array.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  disableEditAndSaveFunc: PropTypes.func.isRequired,
  onChangeFunc: PropTypes.func.isRequired
};

export default EditBookList;
