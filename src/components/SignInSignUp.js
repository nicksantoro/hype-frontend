import React from 'react'
import { Button, Divider, Grid, Header, Segment } from 'semantic-ui-react'


const style = {
  backgroundColor: "red",
  color: "white"
}

const SignInSignUp = () => (

  <Segment placeholder>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>

        <Grid.Column>
          <Header icon>
            Alread a member?
          </Header>
          <Button style={style}>Sign in</Button>
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            Brand new?
          </Header>
          <Button style={style}>Join us</Button>
        </Grid.Column>

      </Grid.Row>
    </Grid>
  </Segment>
)

export default SignInSignUp