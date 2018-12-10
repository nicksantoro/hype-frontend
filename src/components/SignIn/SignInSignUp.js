import React from 'react'
import { Button, Divider, Grid, Header, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const style = {
  backgroundColor: "red",
  color: "white"
}

const link = {
  color: "white"
}

const SignInSignUp = () => (

  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>

        <Grid.Column>
          <Header icon>
            Already a member?
          </Header>
          <Button style={style}>
            <Link style={link} to='/signin'>Sign in</Link>
          </Button>
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            Brand new?
          </Header>
          <Button style={style}>
            <Link style={link} to='/signup'>Sign up</Link>
          </Button>
        </Grid.Column>

      </Grid.Row>
    </Grid>
  </Segment>
)

export default SignInSignUp