import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Card, Icon, Image, Loader, Transition, Button, Modal, Header } from 'semantic-ui-react'
import Moment from 'react-moment'
import './Event.css'
import { deleteEvent } from '../../actions/events'
import { updateEvent } from '../../actions/events'

import UpdateEvent from './UpdateEvent'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>

)

class Event extends Component {

  state = {
    visible: true
  }

  toggleVisibility = () => {
    console.log("hey pulse")
    this.setState({ visible: !this.state.visible })
  }

  handleDelete = () => {
    this.props.deleteEvent(this.props.event.id)
  }

  handleUpdate = (eventUpdates) => {
    this.props.updateEvent(this.props.event.id, eventUpdates)
  }

  render() {

    let { title, description, image, date_time } = this.props.event;

    return !this.props.event ? <Loader active /> : (

      <Card fluid raised link>
        {/* <Image src={image} /> */}
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <Moment className="datetime" format="MMM D YYYY HH:mm" withTitle>{date_time}</Moment> <br />
            <Moment fromNow>{date_time}</Moment>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>

          <Transition animation="pulse" duration={200} visible={this.state.visible}>
            <Icon size="big" onClick={this.toggleVisibility} className="heart" name='heart' />
          </Transition>
          <Button onClick={this.handleDelete} inverted color="red" ><Icon name='delete' />Delete</Button>
          <Modal trigger={<Button color="blue">Show Modal</Button>}>
            <Modal.Header>Select a Photo</Modal.Header>
            <Modal.Content image>

              <UpdateEvent event={this.props.event} onEditSubmit={this.handleUpdate} />

            </Modal.Content>
          </Modal>
        </Card.Content>
      </Card>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteEvent: bindActionCreators(deleteEvent, dispatch),
    updateEvent: bindActionCreators(updateEvent, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Event)