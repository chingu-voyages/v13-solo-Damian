import React, { Component } from "react";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

 class Issue extends Component {
  state = {
    redirect: false,
  };

  render() {
    const issue = this.props.issue;
    return (
      <tr>
        <td>
          {issue._id}
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

export default Issue
