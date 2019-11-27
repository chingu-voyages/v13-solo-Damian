import React, { Component } from 'react'
import Issue from './Issue'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class IssuesDashboard extends Component {
  render () {
    const { issues, user } = this.props
    const project = user ? user.defaultProject || 'TEST' : 'Unknown' // TODO hardcoded data
    const { redirect } = this.props

    if (redirect) {
      return <Redirect to='/login' />
    }
    return (
      issues &&
      <div className='card mb-3'>
        <div className='card-header'>
          <i className='fa fa-table' />
          <span className='h6'> Issues Logged in project </span>
          <span className='h5'>
            {project}{' '}
          </span>
        </div>
        <div className='card-body'>
          <div className='table-responsive'>
            <table
              className='table table-bordered'
              id='issuesTable'
              width='100%'
              cellSpacing='0'
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
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ issues, user }) {
  const redirect = !(user && user.accessToken)
  console.log('IssuesDashboard-mapStateToProps: ' + redirect)

  return {
    redirect,
    issues,
    user
  }
}

export default connect(mapStateToProps)(IssuesDashboard)
