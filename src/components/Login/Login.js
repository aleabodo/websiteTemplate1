import React, { Component } from 'react';

import Frame from '../Frame';
import Button from '../Button';


class Login extends Component {
  constructor(props) {
    super(props);

    /*
    * Expected props:
    *   - shouldRender: boolean
    *   - toggleRenderLogin: function
    */
    this.test = null;
  }


  render() {
    return (
      <Frame shouldRender={this.props.shouldRender} toggleRenderLogin={this.props.toggleRenderLogin} closeable={true}>
        <h1>
          Login
        </h1>
        <form>
          <div className="input">
            <input id="inputEmail" type="text" name="email" placeholder="example@example.com" />
            <label htmlFor="inputEmail">
              <span>Email adress</span>
            </label>
          </div>
          <div className="input">
            <input id="inputPass" type="password" name="password" placeholder="*********" />
            <label htmlFor="inputPass">
              <span>Password</span>
            </label>
          </div>
        </form>
      </Frame>
    );
  }
}

export default Login;
