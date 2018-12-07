
import { connect } from 'react-redux'
import { updateEvent } from '../../actions/events'
import React, { Component } from 'react'
import DatePicker from "react-datepicker";
// import { bindActionCreators } from 'redux';

import { genres } from './constants';

import "react-datepicker/dist/react-datepicker.css";

import { Button, Form, Dropdown } from 'semantic-ui-react'



class UpdateEvent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      ...props.event,
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });

  }

  handleSubmit = (e) => {
    e.preventDefault()

    let { title, category, description, startDate: date_time, users_id, image, location } = this.state
    let payload = { title, category, description, date_time, users_id, image, location }
    console.log(payload)
    this.props.onEditSubmit(payload)

  }

  render() {

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>

          <Form.Field>
            <label>Event Title</label>
            <input defaultValue={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} placeholder='Event Title' />
          </Form.Field>
          <Form.Field>
            <label>Event Image</label>
            <input defaultValue={this.state.image} onChange={(e) => this.setState({ image: e.target.value })} type="url" placeholder='Photo' />
          </Form.Field>
          <Form.Field>
            <label>Category</label>
            <Dropdown onChange={(e) => this.setState({ category: e.target.value })} placeholder='Select Genre' fluid search selection options={genres} />
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
            <input defaultValue={this.state.location} onChange={(e) => this.setState({ location: e.target.value })} placeholder='Location' />
          </Form.Field>

          <Form.TextArea onChange={(e) => this.setState({ description: e.target.value })} label='Description' placeholder='Tell us more about your...' />

          <Button type='submit'>Submit</Button>

        </Form>
      </div>
    )
  }
}

export default connect(null, {
  updateEvent
})(UpdateEvent)
