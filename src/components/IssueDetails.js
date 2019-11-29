import React, { Component } from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm'
import { connect } from 'react-redux'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { Redirect } from 'react-router-dom'
import { handleReceiveComments } from '../actions/commentActionsCreator'
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

class IssueDetails extends Component {
  componentDidMount () {
    const ref = this.props.match.params.id
    this.props.dispatch(handleReceiveComments(ref))
  }
  render () {
    const id = this.props.match.params.id
    const dummyData = {
      created_on: '',
      updated_on: '',
      priority: 1,
      _id: '',
      issue_title: '',
      issue_text: '',
      created_by: '',
      assigned_to: '',
      status_text: '',
      project: ''
    }
    const issue = this.props.issues[id] ? this.props.issues[id] : dummyData

    const { redirect } = this.props
    const comments = this.props.comments
      ? Object.values(this.props.comments)
      : []
    if (redirect) {
      return <Redirect to='/login' />
    }
    return (
      <div className='issue-view'>
        <div className='row'>
          <div id='issue-details-main' className='col-8'>
            <div id='issue-content'>
              <i className='fa fa-bug issue-view-icon' /> BUG-{issue._id}
              <p className='h2 my-3'>{issue.issue_title}</p>
              <p className='h6'>Details</p>
              <p className='my-4'>{issue.issue_text}</p>
            </div>
            <div id='issue-details-add-comment'>
              <CommentForm issueRef={id}/>
              <div id='comments-section'>
                {comments.map(c => <Comment key={c._id} comment={c} />)}
                {/* comments end */}
              </div>
            </div>
          </div>
          <div id='issue-details-side' className='col-4'>
            {/* card */}
            <div class='card mt-2'>
              <div class='card-body'>
                {/* card */}
                <p className='h6 my-3'>
                  <span className='details-label'>Status:</span>
                  <span className='badge badge-warning'>
                    {issue.status_text}
                  </span>
                </p>
                <p className='h6 my-3'>
                  <span className='details-label'>Priority:</span>
                  <span class='badge badge-pill badge-info'>
                    {issue.priority || 'P1'}
                  </span>
                </p>

                <p className='h6 my-3'>
                  <span className='details-label'>Assignee:</span>
                  <i className='fa fa-user issue-view-icon' />{' '}
                  {issue.assigned_to}
                </p>

                <p className='h6 my-3'>
                  <span className='details-label'>Reporter:</span>
                  <i className='fa fa-user issue-view-icon' />{' '}
                  {issue.created_by}
                </p>

                {/* dates */}

                <p className='h6 my-3'>
                  <span className='details-label'>Created:</span>
                  {timeAgo.format(new Date(issue.created_on))}
                </p>

                <p className='h6 my-3'>
                  <span className='details-label'>Last Update:</span>
                  {timeAgo.format(new Date(issue.updated_on))}
                </p>

                <div>
                  <button
                    type='submit'
                    className='btn btn-block btn-warning mt-3'
                  >
                    Update
                  </button>
                </div>
                {/* card end */}
              </div>
            </div>
            {/* card end */}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ issues, user, comments }) {
  const redirect = !(user && user.accessToken)

  return {
    user,
    comments,
    issues,
    redirect
  }
}
export default connect(mapStateToProps)(IssueDetails)
