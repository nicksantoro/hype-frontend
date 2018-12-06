
import { connect } from 'react-redux'
import { addEvent } from '../../actions/events'
import React, { Component } from 'react'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { Button, Form, Dropdown } from 'semantic-ui-react'

const genres = [
  { key: 1, value: "house", text: 'House' },
  { key: 2, value: "techno", text: 'Techno' },
  { key: 3, value: "soul", text: 'Soul' },
  { key: 4, value: "disco", text: 'Disco' },
  { key: 5, value: "funk", text: 'Funk' },
  { key: 6, value: "rock", text: 'Rock' },
  { key: 7, value: "hip-hop", text: 'Hip-Hop' }
]

class AddEvent extends Component {

  state = {
    startDate: new Date(),
    users_id: 1,
    title: "",
    category: "house",
    description: "",
    date_time: "",
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
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>

          <Form.Field>
            <label>Event Title</label>
            <input onChange={(e) => this.setState({ title: e.target.value })} placeholder='Event Title' />
          </Form.Field>
          <Form.Field>
            <label>Event Image</label>
            <input onChange={(e) => this.setState({ image: e.target.value })} type="url" placeholder='Photo' />
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
            <input onChange={(e) => this.setState({ location: e.target.value })} placeholder='Location' />
          </Form.Field>

          <Form.TextArea onChange={(e) => this.setState({ description: e.target.value })} label='Description' placeholder='Tell us more about your...' />

          <Button type='submit'>Submit</Button>

        </Form>
      </div>
    )
  }
}
export default connect()(AddEvent)
