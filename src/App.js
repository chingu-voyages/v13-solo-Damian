import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import IssueSearch from './components/IssueSearch'
import IssuesDashboard from './components/IssuesDashboard'
import CreateIssue from './components/CreateIssue'
import { connect } from 'react-redux'
import { receiveIssues } from './actions/issues'

class App extends Component{
  componentDidMount () {
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

    this.props.dispatch(receiveIssues(issues))
  }
  render () {
    return (
      <div>
        <Navbar />
        <div className='d-flex' id='wrapper'>
          <Sidebar />
          <div id='page-content-wrapper'>
            <div className='container-fluid'>
              <IssueSearch />
              <IssuesDashboard />
              {/* <CreateIssue /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App)
