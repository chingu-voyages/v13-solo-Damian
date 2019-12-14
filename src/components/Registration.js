import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleRegister } from "../actions/userActionsCreator";

class Registration extends Component {
  state = {
    email: "",
    password: "",
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(handleRegister({ ...this.state }));
    this.setState({
      email: "",
      password: "",
    });
    this.props.history.push("/");
  };
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="wrap-login">
          <div className="logo-login" />
          <form className="mt-2" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                name="email"
                type="email"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                type="password"
                className="form-control"
                id="imputPassword"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleOnChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <span className="float-right">
              <Link to="/login">Already have an account?</Link>
            </span>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(issues) {
  return {
    issues,
  };
}
export default connect(mapStateToProps)(Registration);
