import React from "react";
import PropTypes from 'prop-types';

const ViewBookItem = ({ isLoggedIn, deleteFunc, flipEditModeFunc, bookInfo }) => {
  const { title, author, genre, price, isbn, uuid } = bookInfo;
  return (
    <tr className="repeated-item">
      <td>{title}</td>
      <td className="single line">{author}</td>
      <td>{genre}</td>
      <td>{price}</td>
      <td>{isbn}</td>
      {isLoggedIn && <td><button className="yellow ui button" onClick={flipEditModeFunc}>Update</button></td>}
      {isLoggedIn && <td><button className="negative ui button" onClick={deleteFunc.bind(undefined, uuid)}>Delete</button></td>}
    </tr>
  );
};

ViewBookItem.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  bookInfo: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func,
  flipEditModeFunc: PropTypes.func
};

const ViewBookList = ({ isLoggedIn, listOfBooks, deleteFunc, flipEditModeFunc }) => {
  return (
    <div className="ui container">
      <h2 className="ui header left aligned"> All Books</h2>
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
          <ViewBookItem bookInfo={book} key={book.uuid} isLoggedIn={isLoggedIn} deleteFunc={deleteFunc} flipEditModeFunc={flipEditModeFunc} />)
        }
        </tbody>
      </table>
    </div>
  );
};

ViewBookList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  listOfBooks: PropTypes.array.isRequired,
  deleteFunc: PropTypes.func,
  flipEditModeFunc: PropTypes.func
};

export default ViewBookList;
