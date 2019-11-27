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
    console.log(JSON.stringify({ ...this.state }));
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
          <h1 className="text-center mt-5">
            <i className="fa fa-bug" /> Register
          </h1>
          <form className="mt-5" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="inputEmail">Email</label>
              <input
                name="email"
                type="text"
                className="form-control"
                id="inputEmail"
                aria-describedby="emailHelp"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label for="inputPassword">Password</label>
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
              Submit
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
