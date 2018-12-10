import React from 'react'
import EventList from '../events/EventList'
import AddEvent from '../events/AddEvent'
import Div from '../static/Divider'
import MainHeader from '../static/MainHeader'
// import Header from '../static/Header'
import { connect } from 'react-redux'
// import Profile from '../profile/Profile'
import Genres from '../static/Genres'

import { Container } from 'semantic-ui-react'

const Home = (props) => {
  const { formSwitcher } = props
  return (
    <div>
      <Genres />

      <Div />
      <Container centered>

        {/* <Profile /> */}
        {formSwitcher && <AddEvent />}
        <EventList />
      </Container>
    </div>
  )
}

const mapStateToProps = ({ formSwitcher }) => ({ formSwitcher });
export default connect(mapStateToProps)(Home)
