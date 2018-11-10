import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Presentation from './pages/Presentation.js';


class App extends Component {

  componentDidMount() {
    //Color backgroundColor grey
    document.getElementById('body').style.backgroundColor = 'rgb(37, 37, 37)';
  }

  render() {
    /*
    * Router components
    */
    return (
      <Router>
        <div>
          <Route path="/" exact component={() => {
              return(<Redirect to="/me"/>);
            }} />
          <Route path="/:id" component={({match}) => {
              return(<Presentation id={match.params.id} />);
            }} />
        </div>
      </Router>
    );
  }
}

export default App;
