import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import Xbutton from './Xbutton.js';


class Frame extends Component {
  constructor(props) {
    super(props);

    /*
    * Expected props:
    *   - [children]
    *   - shouldRender:boolean
    *   - closeable: boolean
    *   - toggleRenderLogin: function
    */
    this.test = null;
  }


  render() {
    var button = null;
    if(this.props.closeable) {
      button = <Xbutton clickAction={this.props.toggleRenderLogin} />
    }

    return (
      <div>
        <CSSTransition
          in={this.props.shouldRender}
          timeout={600}
          classNames="fade"
          unmountOnExit
        >
          <div className="Frame_background">
          </div>
        </CSSTransition>
        <CSSTransition
          in={this.props.shouldRender}
          timeout={600}
          classNames="fadeZoom"
          unmountOnExit
        >
          <div className="Frame_box">
            <div className="Frame">
              {button}
              {this.props.children}
            </div>
          </div>
        </CSSTransition>
      </div>
    );
  }
}

export default Frame;
