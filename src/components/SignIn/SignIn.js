import React from 'react'
import { Button, Form, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { LOGIN_SUCCESS } from '../../actions/auth';
import { loginAttempt } from '../../actions/auth';


class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: "",
      password: "",
      messages: ["Hello World"]
    }
  }

  onclick() {
    const { email, password } = this.state;
    this.props.dispatch(loginAttempt({ email, password }))
    this.props.history.push("/")
  }

  onChange(key, evt) {
    const state = { ...this.state }
    state[key] = evt.target.value
    this.setState(state)
  }

  render() {

    return (

      <Container text>

        <Form>
          {(() => {
            return this.state.messages.map((m) => <div>{m}</div>)
          })()}

          <Form.Field>
            <label>Email</label>
            <input type="email" onChange={(e) => this.onChange("email", e)} value={this.state.email} type="email" placeholder='Email' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" onChange={(e) => this.onChange("password", e)} value={this.state.password} placeholder='Password' />
          </Form.Field>

          <Button onClick={this.onclick.bind(this)} type='submit'>Submit</Button>
        </Form>

      </Container>

    )
  }
}

export default connect((state) => {
  return {

  }
})(SignIn)






