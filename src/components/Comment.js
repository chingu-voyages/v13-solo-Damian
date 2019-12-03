import React, { Component } from 'react'
import { handleDeleteComment } from '../actions/commentActionsCreator'
import { connect } from 'react-redux'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'

TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

class Comment extends Component {
  render () {
    const comment = this.props.comment
    return (
      <div className='card bg-light my-1'>
        <div className='card-body'>
          <h5 className='card-title' />
          <p className='card-text'>
            {comment.commentText}
          </p>
        </div>
        <div className='card-footer bg-light p-1'>
          <span className='ml-3'>
            <small>
              Created on {timeAgo.format(new Date(comment.created_on))}{' '}
              {comment.author && `by ${comment.author}`}
            </small>
          </span>
          <span className='pull-right'>
            <i
              className='fa fa-trash'
              onClick={() => this.props.dispatchDeleteComment(comment)}
            />
          </span>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchDeleteComment: comment => dispatch(handleDeleteComment(comment))
  }
}
export default connect(null, mapDispatchToProps)(Comment)
