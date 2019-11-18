import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import IssueSearch from './components/IssueSearch'
import IssuesDashboard from './components/IssuesDashboard'

function App () {
  return (
    <div>
      <Navbar />
      <div className='d-flex' id='wrapper'>
        <Sidebar />
        <div id='page-content-wrapper'>
          <div className='container-fluid'>
            <IssueSearch />
            <IssuesDashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
