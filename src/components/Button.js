import React, { Component } from 'react';

import '../styles/Button.css';


class Button extends Component {
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
      <div className="Button">
        {this.props.children}
      </div>
    );
  }
}

export default Button;
