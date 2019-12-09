import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

class IssueSearch extends Component {
  state = {
    priority: "Any",
    status_text: "Any",
    issue_title: "",
  };

  handlePriorityChange = selectedOption => {
    this.setState({ priority: selectedOption.value });
  };

  handleStatusChange = selectedOption => {
    this.setState({ status_text: selectedOption.value });
  };
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmitSearch({ ...this.state });
  };

  componentDidMount() {
    this.setState({ ...this.props.searchParams });
  }
  render() {
    const { priority, status } = this.props.settings;

    const optionsPriority = priority
      ? priority.map(priority => ({
          value: priority,
          label: priority,
        }))
      : [];
    optionsPriority.unshift({
      value: "any",
      label: "Any",
    });

    const optionsStatus = status
      ? status.map(status => ({
          value: status,
          label: status,
        }))
      : [];
    optionsStatus.unshift({
      value: "any",
      label: "Any",
    });

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-sm-3 my-1">
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
          <div className="col-sm-3 my-1">
            <Select
              value={optionsStatus.find(
                val => val.value === this.state.status_text
              )}
              onChange={this.handleStatusChange}
              options={optionsStatus}
              name="status"
              placeholder="Status..."
            />
          </div>

          <div className="col-auto my-1">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps({ settings }) {
  return {
    settings,
  };
}

export default connect(mapStateToProps)(IssueSearch);
