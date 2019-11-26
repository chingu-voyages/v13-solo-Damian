import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Settings extends Component {
  state = {
    displayName: "",
    defaultProject: "",
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify("handleSubmit " + { ...this.state }));
  };
  componentDidMount(){
      
  }

  render() {
    return (
      <form className="issue-form mt-1" onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="displayNameInput">Display name</label>
          <input
            type="displayName"
            class="form-control"
            id="displayNameInput"
            value={this.state.displayName}
            onChange={this.handleOnChange}
          />
        </div>
        <div class="form-group">
          <label for="defaultProject">Default Project</label>
          <select
            class="form-control"
            id="defaultProject"
            value={this.state.defaultProject}
            onChange={this.handleOnChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

function mapStateToProps({ user }) {
  console.log("mapStateToProps " + JSON.stringify(user));

  const redirect = (user && user.accessToken && !user.error) !== true;
  console.log("mapStateToProps: redirect? " + redirect);

  return {
    redirect,
    user,
    created_by,
    assigned_to,
  };
}
export default connect(mapStateToProps)(CreateIssue);
