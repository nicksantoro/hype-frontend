import React from 'react'
import { Header } from 'semantic-ui-react'
import NavBar from './NavBar'
import { connect } from 'react-redux'

const MainHeader = (props) => (
  <div>

    {(() => {
      if (props.isAuthenticated)
        return <NavBar />
    })()}

    <Header as='h2' icon textAlign='center'>

      <Header.Content className="title hvr-icon-buzz-out">HYPE</Header.Content>

    </Header>

  </div>
)

export default connect((state) => {
  return {
    isAuthenticated: !!state.auth.user
  }
})(MainHeader);