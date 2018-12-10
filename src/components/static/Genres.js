import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import './Categories.css'
import { filterEvents } from '../../actions/events'

class Genres extends Component {
  state = { activeItem: 'closest' }

  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleItemClick = (e, { name }) => {
    console.log('e', e);
    console.log('Name', name);
    this.setState({ activeItem: name });
    this.props.filterEvents(name);
  }

  render() {
    const { activeItem } = this.state

    return (
      <Menu text className="ui center aligned container" id="g">
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name='all'
          active={activeItem === 'all'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='electronic'
          active={activeItem === 'electronic'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='jazz'
          active={activeItem === 'jazz'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='soul disco funk'
          active={activeItem === 'soul disco funk'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='rock'
          active={activeItem === 'rock'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='indie'
          active={activeItem === 'indie'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  filterEvents
}, dispatch);

export default connect(null, mapDispatchToProps)(Genres)