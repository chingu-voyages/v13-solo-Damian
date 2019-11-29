import React, { Component } from "react";
import { handleCreateComment } from "../actions/commentActionsCreator";
import { connect } from "react-redux";

class CommentForm extends Component {
  state = {
    commentText: "",
  };
  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const issue = this.props.issueRef;
    this.props.dispatchAddComment({ ...this.state, ...{ issue } });
    this.setState({ commentText: "" });
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group mb-2">
          <i className="fa fa-user issue-view-icon mr-2" />
          <input
            onChange={this.handleOnChange}
            type="text"
            name="commentText"
            readonly
            className="form-control"
            id="comment"
            placeholder="Add a Comment ... "
            value={this.state.commentText}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 mx-1">
          Add Comment
        </button>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatchAddComment: comment => dispatch(handleCreateComment(comment)),
  };
}
export default connect(null, mapDispatchToProps)(CommentForm);
