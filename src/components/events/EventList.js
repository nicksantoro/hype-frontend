import React, { Component } from 'react'
import Event from './Event'
import { connect } from 'react-redux'

class EventList extends Component {
  render() {
    let { events } = this.props
    let eventList = events.map(event => {
      return (
        <div><Event key={event.id} event={event} /></div>
      )
    })
    return (
      <div>
        <div className="ui fluid container">
          <div className="column">

            {eventList}

          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { events: state.events.data }
}

export default connect(mapStateToProps, null)(EventList)

