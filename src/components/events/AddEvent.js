
import { connect } from 'react-redux'
import { addEvent } from '../../actions/events'
import React, { Component } from 'react'
import DatePicker from "react-datepicker";
import { bindActionCreators } from 'redux';

import "react-datepicker/dist/react-datepicker.css";

import { Button, Form, Dropdown } from 'semantic-ui-react'
import { genres } from './constants'

class AddEvent extends Component {

  state = {
    startDate: new Date(),
    users_id: 1,
    title: "",
    category: "House",
    description: "",
    location: "",
    image: "https://images.unsplash.com/photo-1508538462346-c1704d77178b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });

  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    let { title, category, description, startDate: date_time, users_id, image, location } = this.state
    let payload = { title, category, description, date_time, users_id, image, location }
    console.log(payload)
    this.props.addEvent(payload)

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>

          <Form.Field>
            <label>Event Title</label>
            <input onChange={(e) => this.setState({ title: e.target.value })} value={this.state.title} placeholder='Event Title' />
          </Form.Field>
          <Form.Field>
            <label>Event Image</label>
            <input onChange={(e) => this.setState({ image: e.target.value })} value={this.state.image} type="url" placeholder='Photo' />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <Dropdown onChange={(c, e) => this.setState({ category: e.value })} placeholder='Select Genre' fluid search selection options={genres} />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <DatePicker
              showTimeSelect
              selected={this.state.startDate}
              onChange={this.handleChange}
              dateFormat='Pp'
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input onChange={(e) => this.setState({ location: e.target.value })} value={this.state.location} placeholder='Location' />
          </Form.Field>

          <Form.TextArea onChange={(e) => this.setState({ description: e.target.value })} value={this.state.description} label='Description' placeholder='Tell us more about your...' />

          <Button type='submit'>Submit</Button>

        </Form>
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => bindActionCreators({
  addEvent
}, dispatch);

export default connect(null, mapDispatchToProps)(AddEvent)
