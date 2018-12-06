import React, { Component } from 'react'
import { Card, Icon, Image, Loader, Transition } from 'semantic-ui-react'
import './Event.css'

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

  render() {

    let { title, description, image, date_time } = this.props.event;

    return !this.props.event ? <Loader active /> : (

      <Card fluid>
        {/* <Image src={image} /> */}
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Meta>
            <span className='date'>{date_time}</span>
          </Card.Meta>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
        <Card.Content extra>

          <Transition animation="pulse" duration={200} visible={this.state.visible}>

            <Icon size="big" onClick={this.toggleVisibility} className="heart" name='heart' />


          </Transition>
        </Card.Content>
      </Card>
    )


  }


}

export default Event