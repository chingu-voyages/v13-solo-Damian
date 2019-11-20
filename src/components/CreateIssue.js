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
      issue_text: "",
      created_by: "Damian",
      assigned_to: "",
      status_text: "New",
    });
  }

  handleAnswerChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("FORM STATE CHANGED: " + JSON.stringify(this.state));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(handleAddIssue({ ...this.state }));
  };

  render() {
    return (
      <form className="issue-form mt-1" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label for="exampleFormControlSelect1">Project</label>
          <select
            className="form-control"
            id="projectSelect"
            value={this.state.project}
            onChange={this.handleAnswerChange}
            name="project"
          >
            <option value="test">Test Project</option>
          </select>
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
          />
        </div>

        <div className="form-group">
          <label for="prioritySelect">Priority</label>
          <select
            className="form-control"
            id="prioritySelect"
            value={this.state.priority}
            defaultValue={this.state.priority}
            onChange={this.handleAnswerChange}
            name="priority"
          >
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
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
          />
        </div>
        <div className="form-group">
          <label for="statusSelect">Status</label>
          <select
            className="form-control"
            id="statusSelect"
            value={this.state.status_text}
            onChange={this.handleAnswerChange}
            name="status_text"
          >
            <option value="new">New</option>
            <option value="inprogress">In Progress</option>
          </select>
        </div>

        <div className="form-group">
          <label for="assignSelect">Assign</label>
          <select
            className="form-control"
            id="assignSelect"
            value={this.state.assigned_to}
            onChange={this.handleAnswerChange}
            name="assigned_to"
          >
            <option value="damian">Damian</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    );
  }
}

function mapStateToProps(issues) {
  return {
    issues,
  };
}
export default connect(mapStateToProps)(CreateIssue);
