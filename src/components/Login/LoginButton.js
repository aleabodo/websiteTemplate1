import React, { Component } from 'react';


class LoginButton extends Component {
  constructor(props) {
    super(props);

    /*
    * Expected props:
    *   - clickAction: function
    */
    this.x = null;
  }

  render() {
    return (
      <div className="LoginButton" onClick={this.props.clickAction}>
        Login
      </div>
    );
  }
}

export default LoginButton;
