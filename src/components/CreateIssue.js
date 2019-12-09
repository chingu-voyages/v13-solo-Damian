import React, { Component } from "react";
import {
  handleAddIssue,
  handleDeleteIssue,
  handleUpdateIssue,
} from "../actions/issueActionsCreator";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Select from "react-select";

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

  handlePriorityChange = selectedOption => {
    this.setState({ priority: selectedOption.value });
  };

  handleStatusChange = selectedOption => {
    this.setState({ status_text: selectedOption.value });
  };

  handleProjectChange = selectedOption => {
    this.setState({ project: selectedOption.value });
  };

  componentDidMount() {
    if (this.props.issue) {
      this.setState({ ...this.props.issue });
    } else {
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
  }

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDelete = e => {
    this.props.dispatch(handleDeleteIssue({ ...this.state }));
    this.props.history.push("/");
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.props.issue) {
      this.props.dispatch(handleUpdateIssue({ ...this.state }));
    } else {
      this.props.dispatch(handleAddIssue({ ...this.state }));
    }
    this.props.history.push("/");
  };

  render() {
    const { redirect } = this.props;

    if (redirect) {
      return <Redirect to="/login" />;
    }

    const { priority, status } = this.props.settings;
    const { availableProjects } = this.props.user;

    const optionsProject = availableProjects
      ? availableProjects.map(project => ({
          value: project,
          label: project.toUpperCase(),
        }))
      : [];

    const optionsPriority = priority
      ? priority.map(priority => ({
          value: priority,
          label: priority,
        }))
      : [];

    const optionsStatus = status
      ? status.map(status => ({
          value: status,
          label: status.toUpperCase(),
        }))
      : [];

    return (
      <div>
        <p className="h2 ml-3 my-2">
          {this.props.issue ? "Update Issue" : "Create Issue"}
        </p>
        <form className="issue-form mt-1" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="projectSelect">Project</label>
            <Select
              value={optionsProject.find(
                val => val.value === this.state.project
              )}
              onChange={this.handleProjectChange}
              options={optionsProject}
              placeholder="Project..."
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
            <Select
              value={optionsPriority.find(
                val => val.value === this.state.priority
              )}
              onChange={this.handlePriorityChange}
              options={optionsPriority}
              name="priority"
              placeholder="Priority..."
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
            <Select
              value={optionsStatus.find(
                val => val.value === this.state.status_text
              )}
              onChange={this.handleStatusChange}
              options={optionsStatus}
              name="status_text"
              placeholder="Status..."
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
            {this.props.issue ? "Update" : "Create"}
          </button>
          {this.props.issue &&
            <button
              type="submit"
              className="ml-1 btn btn-danger"
              onClick={this.handleDelete}
            >
              Delete
            </button>}
        </form>
      </div>
    );
  }
}

function mapStateToProps({ user, settings, issues }, props) {
  const created_by = user.email;
  const assigned_to = user.email;
  const redirect = !(user && user.accessToken);
  const id = props.match.params.id;
  const issue = id ? issues[id] : null;
  return {
    redirect,
    user,
    created_by,
    assigned_to,
    settings,
    issue,
  };
}
export default connect(mapStateToProps)(CreateIssue);
