import React from "react";
import PropTypes from 'prop-types';

const EditBookItem = ({ isLoggedIn, deleteFunc, flipEditModeFunc, onChangeFunc, bookInfo }) => {
  const { title, author, genre, price, isbn, uuid } = bookInfo;
  return (
    <tr className="repeated-item">
      <td><div className="ui input mini"><input type="text" value={title} onChange={onChangeFunc} /></div></td>
      <td className="single line">{author}</td>
      <td>{genre}</td>
      <td>{price}</td>
      <td>{isbn}</td>
      {isLoggedIn && <td><button className="yellow ui button" onClick={flipEditModeFunc}>Update</button></td>}
      {isLoggedIn && <td><button className="negative ui button" onClick={deleteFunc.bind(undefined, uuid)}>Delete</button></td>}
    </tr>
  );
};

EditBookItem.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  bookInfo: PropTypes.object.isRequired,
  deleteFunc: PropTypes.func,
  flipEditModeFunc: PropTypes.func,
  onChangeFunc: PropTypes.func
};

const EditBookList = ({ isLoggedIn, listOfBooks, deleteFunc, flipEditModeFunc, onChangeFunc }) => {
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
            flipEditModeFunc={flipEditModeFunc} 
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
  deleteFunc: PropTypes.func,
  flipEditModeFunc: PropTypes.func,
  onChangeFunc: PropTypes.func
};

export default EditBookList;
