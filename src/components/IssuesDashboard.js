import React, { Component } from 'react'
import Issue from './Issue'
class IssuesDashboard extends Component {
  render () {
    const issues = [
      {
        created_on: '2019-10-26T06:48:41.967Z',
        updated_on: '2019-10-26T06:48:41.967Z',
        priority: 1,
        open: false,
        _id: '5db3ec4e1b65214174c71e81',
        issue_title: 'Title',
        issue_text: 'text',
        created_by: 'Functional Test - Every field filled in',
        assigned_to: 'Chai and Mocha',
        status_text: 'In QA',
        project: 'test',
        __v: 0
      },
      {
        created_on: '2019-10-26T06:49:05.441Z',
        updated_on: '2019-10-26T06:49:05.441Z',
        priority: 1,
        open: true,
        _id: '5db3ec6525a23b9198602c37',
        issue_title: 'Title',
        issue_text: 'text',
        created_by: 'Functional Test - Every field filled in',
        assigned_to: 'Chai and Mocha',
        status_text: 'In QA',
        project: 'test',
        __v: 0
      }
    ]
    const project = 'TEST'
    return (
      <div className='card mb-3'>
        <div className='card-header'>
          <i className='fa fa-table' />
          Issues Logged in project : {project}
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
                {issues.map(issue => <Issue key={issue._id} issue={issue} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default IssuesDashboard
