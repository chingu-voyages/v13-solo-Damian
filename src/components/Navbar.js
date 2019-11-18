import React, { Component } from 'react'
class Navbar extends Component {
  render () {
    return (
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#topNavbarContent'
          aria-controls='topNavbarContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>

        <div className='collapse navbar-collapse' id='topNavbarContent'>
          <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                User
              </a>
              <div
                className='dropdown-menu dropdown-menu-right'
                aria-labelledby='navbarDropdown'
              >
                <a className='dropdown-item' href='#'>
                  Logout
                </a>
                <a className='dropdown-item' href='#'>
                  Profile
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
export default Navbar
