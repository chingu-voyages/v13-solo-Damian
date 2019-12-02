import React, { Component } from "react";
import { connect } from "react-redux";
import Select from "react-select";

class IssueSearch extends Component {
  state = {
    priority: 1,
    status: "New",
    contains: "",
  };

  handlePriorityChange = selectedOption => {
    console.log(JSON.stringify(selectedOption));
    this.setState({ priority: selectedOption.value });
  };

  handleStatusChange = selectedOption => {
    console.log(JSON.stringify(selectedOption));
    this.setState({ status: selectedOption.value });
  };
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit " + JSON.stringify({ ...this.state }));
    // this.props.dispatch(handleUpdate({ ...this.state }));

    // this.props.history.push("/");
  };
  render() {
    const { priority, status } = this.props.settings;

    const optionsPriority = priority
      ? priority.map(priority => ({
          value: priority,
          label: priority,
        }))
      : [];

    const optionsStatus = status
      ? status.map(status => ({
          value: status,
          label: status,
        }))
      : [];

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
              value={optionsStatus.find(val => val.value === this.state.status)}
              onChange={this.handleStatusChange}
              options={optionsStatus}
              name="status"
              placeholder="Status..."
            />
          </div>
          <div className="col-sm-3 my-1">
            <input
              type="text"
              className="form-control my-1 mr-sm-2"
              id="contains"
              placeholder="Contains..."
              value={this.state.contains}
              name="contains"
              onChange={this.handleOnChange}
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
