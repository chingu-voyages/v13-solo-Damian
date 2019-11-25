import React, { Component } from 'react'
import '../styles/style.css'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import IssueSearch from './IssueSearch'
import IssuesDashboard from './IssuesDashboard'
import CreateIssue from './CreateIssue'
import { connect } from 'react-redux'
// import { handleReceiveIssues } from '../actions/issueActionsCrseator'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import IssueDetails from './IssueDetails'
import Registration from './Registration'
import Login from './Login'

class App extends Component {
  componentDidMount () {
  }
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

const NoNavContainer = () =>
  <div className='App'>
    <div className='container'>
      <Route exact path='/' render={() => <Redirect to='/login' />} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Registration} />
    </div>
  </div>

const DefaultContainer = () =>
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
  </div>

function mapStateToProps ({ authedUser }) {
  return {
    authedUser
  }
}
export default connect(mapStateToProps)(App)
