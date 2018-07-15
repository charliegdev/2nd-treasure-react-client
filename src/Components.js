import React from "react";
import PropTypes from 'prop-types';

const Menu = ({ isLoggedIn = true, changeLoginFunc }) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary fluid menu">
        {isLoggedIn ? 
          <a className="active item right orange" onClick={changeLoginFunc}>Logout</a>
          : 
          <a className="active item right blue" onClick={changeLoginFunc}>Employee Login</a>
        }
      </div>
    </div>
  );
};

Menu.propTypes = {
  isLoggedIn: PropTypes.bool,
  changeLoginFunc: PropTypes.func.isRequired
};

const BookItem = props => {
  const { isLoggedIn } = props;
  const { title, author, genre, price, isbn } = props.bookInfo;
  return (
    <tr className="repeated-item">
      <td>{title}</td>
      <td className="single line">{author}</td>
      <td>{genre}</td>
      <td>{price}</td>
      <td>{isbn}</td>
      {isLoggedIn && 
        <td><button className="yellow ui button">Update</button></td>
      }
      {isLoggedIn && <td><button className="negative ui button">Delete</button></td>}
    </tr>
  );
};

BookItem.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  bookInfo: PropTypes.object.isRequired
};

const BookList = ({ isLoggedIn, listOfBooks }) => {
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
        <tbody>{listOfBooks.map(book => <BookItem bookInfo={book} key={book.uuid} isLoggedIn={isLoggedIn} />)}</tbody>
      </table>
    </div>
  );
};

BookList.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  listOfBooks: PropTypes.array.isRequired
};

export { Menu, BookList };
