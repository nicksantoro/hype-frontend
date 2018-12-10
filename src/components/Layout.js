import React, { Component } from 'react'
import MainHeader from './static/MainHeader'

class Layout extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        {this.props.children}

      </div>
    )
  }
}

export default Layout
