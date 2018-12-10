import React, { Component } from 'react'
import { Menu, Container } from 'semantic-ui-react'
import './Categories.css'

export default class Categories extends Component {

  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (

      <Container fluid>
        <Menu inverted>

          <Container>

            {/* //row */}
            {/* <Menu.Item>
          <h1>Hype</h1>
        </Menu.Item> */}

            {/* row */}
            <Menu.Item
              className="i"
              name='all'
              active={activeItem === 'all'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="i"
              name='house'
              active={activeItem === 'house'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="i"
              name='techno'
              active={activeItem === 'techno'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="i"
              name='disco/soul'
              active={activeItem === 'disco soul'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="i"
              name='funk'
              active={activeItem === 'funk'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="i"
              name='hip-hop'
              active={activeItem === 'hip-hop'}
              onClick={this.handleItemClick}
            />
          </Container>
        </Menu>

      </Container>

    )
  }
}
