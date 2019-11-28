import React, { Component } from 'react'

class Comment extends Component {
  render () {
    const comment = this.props.comment

    return (
      <div class='card bg-light my-1'>
        <div class='card-body'>
          <h5 class='card-title' />
          <p class='card-text'>
            {comment.commentText}
          </p>
        </div>
        <div class='card-footer bg-light p-1'>
          <span class='ml-3'>
            <small>
              Created on {comment.created_on} by {comment.author}
            </small>
          </span>
          <span class='pull-right'>
            <i class='fa fa-trash' />
          </span>
        </div>
      </div>
    )
  }
}
export default Comment
