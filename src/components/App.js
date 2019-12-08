import React, { Component } from 'react'
import '../styles/style.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import IssueSearch from './IssueSearch'
import IssuesDashboard from './IssuesDashboard'
import CreateIssue from './CreateIssue'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import IssueDetails from './IssueDetails'
import Registration from './Registration'
import Login from './Login'
import Settings from './Settings'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/(login|register)' component={NoNavContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    )
  }
}

const NoNavContainer = props =>
  <div className='App'>
    <div className='container'>
      <Route path='/login' component={Login} />
      <Route path='/register' component={Registration} />
    </div>
  </div>

const DefaultContainer = props =>
  <div className='App'>
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
                  <IssuesDashboard />
                </div>}
            />
            <Route path='/create' component={CreateIssue} />
            <Route path='/details/:id' component={IssueDetails} />
            <Route path='/edit/:id' component={CreateIssue} />
            <Route path='/settings' component={Settings} />
          </div>
        </div>
      </div>
    </div>
  </div>

function mapStateToProps ({ loadingBar }) {
  return {
    loading: loadingBar.default > 0
  }
}
export default connect(mapStateToProps)(App)
