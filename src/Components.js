import React from 'react';

const Menu = ({ showLogin = true}) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary fluid menu">
      { showLogin ? 
        <a className="active item right blue"> Employee Login </a>
        :      
        <a className="active item right orange"> Logout </a>
      }
      </div>
    </div>
  );
}

export { Menu };