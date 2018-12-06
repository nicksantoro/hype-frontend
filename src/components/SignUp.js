import React from 'react'
import { Form, Input } from 'semantic-ui-react'

const SignUp = () => (
  <Form>
    <Form.Field required>
      <label>First name</label>
      <Input placeholder='first name' />
    </Form.Field>
    <Form.Field required>
      <label>Last name</label>
      <Input placeholder='last name' />
    </Form.Field>
    <Form.Field required>
      <label>Email</label>
      <Input type="email" placeholder='email' />
    </Form.Field>
    <Form.Field required>
      <label>Password</label>
      <Input type="password" placeholder='password' />
    </Form.Field>
  </Form>
)

export default SignUp