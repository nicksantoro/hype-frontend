import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { switchForm } from '../../actions/formSwitcher'

const NavBar = (props) => {
  console.log(props)
  console.log(props.user)
  return (
    <div>

      <div className="ui secondary menu">
        {/* <a className="item">
          Home
        </a>
        <a className="item">
          I'm in!
        </a>
        */}
        <a className="item">
          San Francisco
        </a>
        <a className="red item" onClick={props.switchForm}>
          Add Event
        </a>
        {/* <a className="item">
          <Link to="/SignInSignUp" className="red item">
            Sign Up
          </Link>
        </a> */}
        <div className="right menu">
          {/* <div className="item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div> */}
          <a className="ui item">
            {props.user ? props.user.user_name : "Unknown"}
          </a>
          {/* <a className="red item">
            Add Event
          </a> */}
          <a className="ui item">
            Logout
          </a>
        </div>
      </div>

    </div>
  )
}

const mapDispatchToProps = dispatch => bindActionCreators({
  switchForm
}, dispatch);

export default connect((state) => {
  return {
    user: state.auth.user
  }
}, mapDispatchToProps)(NavBar)

