import React, { Component } from "react";
import Issue from "./Issue";
import Pagination from "./Pagination";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleReceiveIssues } from "../actions/issueActionsCreator";
class IssuesDashboard extends Component {
  state = {
    pagination: { page: 1, limit: 10 },
  };
  handleRefresh = () => {
    const { page, limit } = this.state.pagination;
    this.props.dispatch(handleReceiveIssues(page, limit));
  };

  handlePaginationNext = () => {
    const { pagination } = { ...this.state };
    const isLast = Object.keys(this.props.issues).length < this.state.limit;
    if (!isLast) pagination.page += 1;
    this.setState();
    this.setState(pagination);
    this.handleRefresh();
  };
  handlePaginationPrevious = () => {
    const { pagination } = { ...this.state };
    pagination.page = pagination.page > 1 ? pagination.page - 1 : 1;
    this.setState(pagination);
    this.handleRefresh();
  };
  componentDidMount() {
    const { page, limit } = this.state.pagination;
    this.props.dispatch(handleReceiveIssues(page, limit));
  }

  render() {
    const { issues, user } = this.props;
    const project = user ? user.defaultProject : "Unknown";
    const { redirect } = this.props;

    if (redirect) {
      return <Redirect to="/login" />;
    }
    return (
      issues &&
      <div className="card mb-3">
        <div className="card-header">
          <i className="fa fa-table mr-2" />
          <span className="h5 project-name">
            {project}
          </span>
          <button
            className="btn btn-light pull-right"
            onClick={this.handleRefresh}
          >
            <i className="fa fa-refresh" />
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="issuesTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Priority</th>
                  <th>Assignee</th>
                  <th>Status</th>
                  <th>Summary</th>
                  <th>Changed</th>
                </tr>
              </thead>

              <tbody>
                {Object.keys(issues).map(i =>
                  <Issue key={i} issue={issues[i]} />
                )}
              </tbody>
            </table>
          </div>
          <div className="d-flex flex-row">
            <Pagination
              next={this.handlePaginationNext}
              previous={this.handlePaginationPrevious}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ issues, user }) {
  const redirect = !(user && user.accessToken);
  return {
    redirect,
    issues,
    user,
  };
}

export default connect(mapStateToProps)(IssuesDashboard);
