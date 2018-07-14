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

export { Menu };