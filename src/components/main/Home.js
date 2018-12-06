import React from 'react'
import EventList from '../events/EventList'
import AddEvent from '../events/AddEvent'
import Profile from '../profile/Profile'

import { Container } from 'semantic-ui-react'

const Home = () => {
  return (
    <div>

      <Container centered>
        <h3>Home</h3>
        <Profile />
        <AddEvent />
        <EventList />
      </Container>
    </div>
  )
}

export default Home
