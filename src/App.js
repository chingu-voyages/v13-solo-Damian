import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import IssueSearch from './components/IssueSearch'
import IssuesDashboard from './components/IssuesDashboard'
import CreateIssue from './components/CreateIssue'
import { connect } from 'react-redux'
import { handleReceiveIssues } from './actions/issuesCreator'
class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleReceiveIssues('test'))
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
              <CreateIssue />
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
