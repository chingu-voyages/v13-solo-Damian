import React, { Component } from "react";
import { handleLogout } from "../actions/userActionsCreator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const logo = require('../res/images/issue_tracker.png')

class Navbar extends Component {
  logout = () => {
    const { user } = this.props;
    if (user && user.email) this.props.dispatch(handleLogout(user));
  };
  render() {
    const { user } = this.props;
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
         <a className="navbar-brand" href="#">
          <div className="logo-image" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#topNavbarContent"
          aria-controls="topNavbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="topNavbarContent">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {user.displayName || user.email || "Unknown"}
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <Link
                  className="dropdown-item"
                  to="/login"
                  onClick={this.logout}
                >
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}
export default connect(mapStateToProps)(Navbar);
