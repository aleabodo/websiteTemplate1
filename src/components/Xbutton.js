import React, { Component } from 'react';


class Xbutton extends Component {
  render() {
    return (
      <div>
          <svg className="Xbutton" viewBox="-10 -10 530 530" onClick={this.props.clickAction}>
            <g>
            		<path d="M437.019,74.981C388.668,26.628,324.378,0,256,0C187.62,0,123.333,26.628,74.981,74.98S0,187.62,0,256    c0,68.381,26.628,132.668,74.981,181.02C123.332,485.372,187.62,512,255.999,512s132.669-26.628,181.02-74.98    C485.371,388.667,512,324.38,512,256C512,187.619,485.371,123.332,437.019,74.981z M368.853,347.642    c5.857,5.857,5.857,15.355,0,21.213c-2.93,2.929-6.768,4.393-10.607,4.393c-3.838,0-7.678-1.465-10.605-4.393L256,277.214    l-91.641,91.641c-2.93,2.929-6.768,4.393-10.607,4.393c-3.838,0-7.678-1.465-10.605-4.393c-5.858-5.857-5.858-15.355,0-21.213    l91.64-91.641l-91.64-91.641c-5.858-5.857-5.858-15.355,0-21.213c5.857-5.857,15.354-5.857,21.213,0L256,234.788l91.64-91.641    c5.857-5.857,15.355-5.857,21.213,0c5.857,5.857,5.857,15.355,0,21.213l-91.641,91.641L368.853,347.642z" data-original="#000000"  data-old_color="#561919"/>
            </g>
          </svg>

      </div>
    );
  }
}

export default Xbutton;
