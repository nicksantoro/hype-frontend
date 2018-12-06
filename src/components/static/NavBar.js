import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>

      <div className="ui secondary menu">
        <a className="item">
          Home
        </a>
        <a className="item">
          I'm in!
        </a>
        <a className="item">
          Friends
        </a>
        <a className="red item">
          Add Event
        </a>
        <a className="item">
          <Link to="/SignInSignUp" className="red item">
            Sign Up
          </Link>
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <a className="ui item">
            Logout
          </a>
        </div>
      </div>

    </div>
  )
}

export default NavBar
