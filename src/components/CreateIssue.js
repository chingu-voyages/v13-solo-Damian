import React, { Component } from "react";
import { handleAddIssue } from "../actions/issuesCreator";
import { connect } from "react-redux";

class CreateIssue extends Component {
  state = {
    issue_title: "",
    issue_text: "",
    created_by: "Damian",
    assigned_to: "",
    status_text: "New",
  };

  componentDidMount() {
    this.setState({
      issue_title: "",
      project: "test",
      issue_text: "",
      created_by: "Damian",
      assigned_to: "Damian",
      priority: 1,
      status_text: "New",
    });
  }

  handleAnswerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("FORM STATE CHANGED: " + JSON.stringify(this.state));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(JSON.stringify({ ...this.state }));
    this.props.dispatch(handleAddIssue({ ...this.state }));
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <p className="h2 ml-3 my-2">Create Issue</p>
        <form className="issue-form mt-1" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="exampleFormControlSelect1">Project</label>
            <input
              className="form-control"
              id="projectSelect"
              value={this.state.project}
              onChange={this.handleAnswerChange}
              name="project"
            />
          </div>

          <div className="form-group">
            <label for="titleIssue">Title</label>
            <input
              type="text"
              className="form-control"
              id="titleIssue"
              value={this.state.issue_title}
              name="issue_title"
              onChange={this.handleAnswerChange}
              required
            />
          </div>

          <div className="form-group">
            <label for="prioritySelect">Priority</label>
            <input
              className="form-control"
              id="prioritySelect"
              value={this.state.priority}
              defaultValue={this.state.priority}
              onChange={this.handleAnswerChange}
              name="priority"
              type="number"
            />
          </div>
          <div className="form-group">
            <label for="descriptionTextArea">Description</label>
            <textarea
              className="form-control"
              id="descriptionTextArea"
              rows="3"
              value={this.state.issue_text}
              onChange={this.handleAnswerChange}
              name="issue_text"
              required
            />
          </div>
          <div className="form-group">
            <label for="statusSelect">Status</label>
            <input
              className="form-control"
              id="statusSelect"
              value={this.state.status_text}
              onChange={this.handleAnswerChange}
              name="status_text"
            />
          </div>

          <div className="form-group">
            <label for="assignSelect">Assign</label>
            <input
              className="form-control"
              id="assignSelect"
              value={this.state.assigned_to}
              onChange={this.handleAnswerChange}
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

function mapStateToProps(issues) {
  return {
    issues,
  };
}
export default connect(mapStateToProps)(CreateIssue);
