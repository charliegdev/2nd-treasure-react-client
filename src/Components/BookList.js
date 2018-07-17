import React from "react";
import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ isLoggedIn, listOfBooks, deleteFunc, saveFunc }) => {
  return (
    <div>
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
          <BookItem bookInfo={book} key={book.uuid} isLoggedIn={isLoggedIn} deleteFunc={deleteFunc} saveFunc={saveFunc}/>)
        }
        </tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  listOfBooks: PropTypes.array.isRequired,
  deleteFunc: PropTypes.func.isRequired,
  saveFunc: PropTypes.func.isRequired
};

export default BookList;
