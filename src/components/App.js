import React, { Component } from 'react'
import '../styles/style.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import IssueSearch from './IssueSearch'
import IssuesDashboard from './IssuesDashboard'
import CreateIssue from './CreateIssue'
import { connect } from 'react-redux'
import { handleReceiveIssues } from '../actions/issuesCreator'
import { Route } from 'react-router-dom'
import IssueDetails from './IssueDetails'

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
              <Route
                exact
                path='/'
                render={() =>
                  <div>
                    <IssueSearch />
                    <IssuesDashboard />
                  </div>}
              />
              <Route path='/create' component={CreateIssue} />
              <Route path='/details/:id' component={IssueDetails} />
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
