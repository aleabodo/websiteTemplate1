import React, { Component } from 'react';

class PresentationPage extends Component {
  constructor(props) {
    super(props);

    /*
    * Expected props:
    *   presentation: String
    */
    this.test = null;
  }

  render() {
    const Presentation = require('./Presentations/' + this.props.presentation + '.js').default;
    return (
      <div>
        <Presentation />
      </div>
    );
  }
}

export default PresentationPage;
