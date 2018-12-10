import React, { Component } from 'react';
import './App.css';
// import Example from './components/Example'
// import Categories from './components/static/Categories'
import NavBar from './components/static/NavBar'
// import Div from './components/static/Divider'
import SignInSignUp from './components/SignIn/SignInSignUp'
// import Title from './components/static/Title'
// import EventList from './components/events/EventList'
import Home from './components/main/Home'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignIn/SignUp'
import Layout from './components/Layout'
import { connect } from 'react-redux'

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

  // componentDidMount() {
  //   this.props.dispatch()
  // }

  render() {
    return (

      <div className="App">

        <Router>
          <Layout>
            <Route exact path='/SignInSignUP' component={SignInSignUp} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/" component={Home} />
          </Layout>
        </Router>
      </div>

    );
  }
}



export default connect((state) => {
  return {
    isAuthenticated: !!state.auth.user
  }
})(App);


// addHeadersToRequest = () => {
//   fetch('/getsomething', {
//     headers: {
//       'x-access-token' : localStorage.getItem('token')
//     }
//     body: JSON.stringify({toppings: []})
//   })
// }