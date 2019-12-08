import React, { Component } from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { Link } from "react-router-dom";

TimeAgo.addLocale(en);
const timeAgo = new TimeAgo("en-US");

class Issue extends Component {
  state = {
    redirect: false,
  };

  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>
          <Link to={`/details/${issue._id}`}>
            <span className="issueId">{issue.issue_id}</span>
          </Link>
        </td>
        <td>
          {issue.priority}
        </td>
        <td>
          {issue.assigned_to}
        </td>
        <td>
          {issue.status_text}
        </td>
        <td>
          {issue.issue_title}
        </td>
        <td>
          {timeAgo.format(new Date(issue.updated_on))}
        </td>
      </tr>
    );
  }
}

export default Issue;
