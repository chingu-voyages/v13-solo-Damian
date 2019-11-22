import React, { Component } from 'react'
// import Issue from './Issue'
import { connect } from 'react-redux'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import api from '../helper/API'
TimeAgo.addLocale(en)
const timeAgo = new TimeAgo('en-US')

class IssueDetails extends Component {
  render () {
    const id = this.props.match.params.id;    
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
      project: '',
    }
    const issue = this.props.issues[id] ? this.props.issues[id] : dummyData
    console.log("ISSUE >> " + JSON.stringify(issue))
    return (
      <div className='issue-view'>
        <div className='row'>
          <div id='issue-details-main' className='col-8'>
            <i className='fa fa-bug issue-view-icon' /> BUG-{issue._id}
            <p className='h2 my-3'>{issue.issue_title}</p>
            <p className='h6'>Details</p>
            <p className='my-4'>{issue.issue_text}</p>
            <div id='issue-details-add-comment'>
              <form className='form-inline'>
                <div className='form-group mb-2'>
                  <i className='fa fa-user issue-view-icon mr-2' />
                  <input
                    type='text'
                    readonly
                    className='form-control'
                    id='comment'
                    value='Add a Comment ... '
                  />
                </div>
                <button type='submit' className='btn btn-primary mb-2 mx-1'>
                  Submit
                </button>
              </form>
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
                  <button type='submit' className='btn btn-block btn-warning mt-3'>
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

function mapStateToProps (issues) {
  return {
    issues
  }
}
export default connect(mapStateToProps)(IssueDetails)
