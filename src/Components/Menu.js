import React from "react";
import PropTypes from 'prop-types';

const Menu = ({ isLoggedIn, loginFunc, logoutFunc }) => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary fluid menu">
        {isLoggedIn ? 
          <a className="active item right orange" onClick={logoutFunc}>Logout</a>
          : 
          <a className="active item right blue" onClick={loginFunc}>Employee Login</a>
        }
      </div>
    </div>
  );
};

Menu.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  loginFunc: PropTypes.func.isRequired,
  logoutFunc: PropTypes.func.isRequired
};

export default Menu;