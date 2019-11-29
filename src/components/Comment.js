import React, { Component } from 'react'
import { handleDeleteComment } from '../actions/commentActionsCreator'
import {connect} from 'react-redux'
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
              Created on {comment.created_on} by {comment.author}
            </small>
          </span>
          <span className='pull-right'>
            <i className='fa fa-trash' onClick={()=> this.props.dispatchDeleteComment(comment._id)}/>
          </span>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return({
      dispatchDeleteComment: (ref) => dispatch(handleDeleteComment(ref))
  })
}
export default connect(null, mapDispatchToProps)(Comment);