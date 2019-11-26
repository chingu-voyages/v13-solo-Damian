import React, { Component } from "react";
import { handleAddIssue } from "../actions/issueActionsCreator";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateIssue extends Component {
  state = {
    issue_title: "",
    issue_text: "",
    created_by: "",
    assigned_to: "",
    status_text: "",
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.assigned_to !== prevState.assigned_to &&
      nextProps.created_by !== prevState.created_by
    ) {
      return {
        assigned_to: nextProps.assigned_to,
        created_by: nextProps.created_by,
      };
    }
  }

  componentDidMount() {
    this.setState({
      issue_title: "",
      project: "test",
      issue_text: "",
      created_by: "Unknown",
      assigned_to: "Unknown",
      priority: 1,
      status_text: "New",
    });
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("FORM STATE CHANGED: " + JSON.stringify(this.state));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify("handleSubmit " + { ...this.state }));
    this.props.dispatch(handleAddIssue({ ...this.state }, this.props.user));
    this.props.history.push("/");
  };

  render() {
    const { redirect } = this.props;

    if (redirect) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        <p className="h2 ml-3 my-2">Create Issue</p>
        <form className="issue-form mt-1" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectSelect">Project</label>
            <input
              className="form-control"
              id="projectSelect"
              value={this.state.project}
              onChange={this.handleOnChange}
              name="project"
            />
          </div>

          <div className="form-group">
            <label htmlFor="titleIssue">Title</label>
            <input
              type="text"
              className="form-control"
              id="titleIssue"
              value={this.state.issue_title}
              name="issue_title"
              onChange={this.handleOnChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="prioritySelect">Priority</label>
            <input
              className="form-control"
              id="prioritySelect"
              value={this.state.priority}
              defaultValue={this.state.priority}
              onChange={this.handleOnChange}
              name="priority"
              type="number"
            />
          </div>
          <div className="form-group">
            <label htmlFor="descriptionTextArea">Description</label>
            <textarea
              className="form-control"
              id="descriptionTextArea"
              rows="3"
              value={this.state.issue_text}
              onChange={this.handleOnChange}
              name="issue_text"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="statusSelect">Status</label>
            <input
              className="form-control"
              id="statusSelect"
              value={this.state.status_text}
              onChange={this.handleOnChange}
              name="status_text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="assignSelect">Assign</label>
            <input
              className="form-control"
              id="assignSelect"
              value={this.state.assigned_to}
              onChange={this.handleOnChange}
              name="assigned_to"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  console.log("mapStateToProps " + JSON.stringify(user));
  // const {user} = state

  const created_by = user.email;
  const assigned_to = user.email;
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
