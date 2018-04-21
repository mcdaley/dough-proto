//-----------------------------------------------------------------------------
// app/webpacker/src/components/App.jsx
//-----------------------------------------------------------------------------
import React  from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Navbar     from './navbar'
import Checkbook  from '../pages/checkbook'
import About      from '../pages/about'
import Help       from '../pages/help'

export default class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Checkbook} />
          <Route path='/home'   component={Checkbook} />
          <Route path='/about'  component={About} />
          <Route path='/help'   component={Help}  />
        </div>
      </Router>
    )
  }
}
