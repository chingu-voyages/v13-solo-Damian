import React, { Component } from "react";

class Issue extends Component {
  state = {
    redirect: false,
  };

  render() {
    const issue = this.props.issue;
    // if (this.state.redirect) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: `/issues/${issue.id}`,
    //       }}
    //     />
    //   );
    // }
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
          {issue.updated_on}
        </td>
      </tr>
    );
  }
}

export default Issue
