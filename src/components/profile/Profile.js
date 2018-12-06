import React, { Component } from 'react'
import ProfileCard from './ProfileCard'
import Activity from './Activity'
import FriendsList from '../friends/FriendsList'

import { Grid } from 'semantic-ui-react'

class Profile extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <ProfileCard />
            </Grid.Column>
            <Grid.Column width={5}>
              <Activity />
            </Grid.Column>
            <Grid.Column width={5}>
              <FriendsList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Profile
