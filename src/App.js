import React, { Component } from 'react';
import './App.css';
// import Example from './components/Example'
// import Categories from './components/static/Categories'
import NavBar from './components/static/NavBar'
// import Div from './components/static/Divider'
import SignInSignUp from './components/SignInSignUp'
// import Title from './components/static/Title'
// import EventList from './components/events/EventList'
import Home from './components/main/Home'
import NavTop from './components/static/NavTop'

// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import { Container } from 'semantic-ui-react'

class App extends Component {

  state = {
    events: [
      {
        id: 1,
        title: 'Ray Mang',
        category: 'Disco',
        description: 'Funky Disco Edits ',
        date_time: '2018-12-29 19:00:00',
        location: 'San Francisco'
      }
    ]
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Container centered>
            <NavBar />
            <Route exact path="/" component={Home} />



            <Route exact path='/SignInSignUp' component={SignInSignUp} />


          </Container>
        </div>

      </Router>
    );
  }
}

export default App;


