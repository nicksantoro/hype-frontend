import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { LOGIN_SUCCESS } from '../../actions/auth';
import { loginAttempt } from '../../actions/auth';


class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      messages: ["Hello World"]
    }
  }

  onclick() {
    const { firstName, lastName, email, username, password } = this.state;
    this.props.dispatch(loginAttempt(firstName, lastName, email, username, password))
  }

  onChange(key, evt) {
    const state = { ...this.state }
    state[key] = evt.target.value
    this.setState(state)
  }

  render() {

    return (

      <Form>
        {(() => {
          return this.state.messages.map((m) => <div>{m}</div>)
        })()}
        <Form.Field>
          <label>First Name</label>
          <input onChange={(e) => this.onChange("firstName", e)} value={this.state.firstName} placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input onChange={(e) => this.onChange("lastName", e)} value={this.state.lastName} placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>Username</label>
          <input onChange={(e) => this.onChange("username", e)} value={this.state.username} placeholder='Username Name' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input onChange={(e) => this.onChange("email", e)} value={this.state.email} type="email" placeholder='Email' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input onChange={(e) => this.onChange("password", e)} value={this.state.password} placeholder='Password' />
        </Form.Field>

        <Button onClick={this.onclick.bind(this)} type='submit'>Submit</Button>
      </Form>

    )
  }
}

export default connect((state) => {
  return {

  }
})(SignIn)






