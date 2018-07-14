import React from 'react';

const Menu = ({ isLoggedIn = true, changeLoginFunc }) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary fluid menu">
      { isLoggedIn ? 
        <a className="active item right orange" onClick={changeLoginFunc}> Logout </a>
        : 
        <a className="active item right blue" onClick={changeLoginFunc}> Employee Login </a>
      }
      </div>
    </div>
  );
}

const BookList = ({ isLoggedIn, data }) => {
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
            <th className={isLoggedIn ? 'two wide' : 'four wide'}>ISBN</th>
            <th className="one wide">Update</th>
            <th className="one wide">Delete</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}

export { Menu, BookList };