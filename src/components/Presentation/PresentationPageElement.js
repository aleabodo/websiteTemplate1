import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class PresentationPage extends Component {
  constructor(props) {
    super(props);

    /*
    * Expected props:
    *   img: String
    *   orientationRight: bool
    */
    this.test = null;
  }

  render() {
    const style = this.props.img ? {
      backgroundImage: "url('" + this.props.img + "')"
    } : {
      display: "none"
    }

    if(this.props.orientationRight) {
      return (
        <Fade bottom>
          <div className="PresentationPage_box">
            <div className="PresentationPage_content PresentationPage_contentLeft">
              {this.props.children}
            </div>
            <div style={style} className="PresentationPage_imageRight PresentationPage_image" id="img">

            </div>
          </div>
        </Fade>
      );
    } else {
      return (
        <Fade bottom>
          <div className="PresentationPage_box">
            <div style={style} className="PresentationPage_imageLeft PresentationPage_image" id="img">

            </div>
            <div className="PresentationPage_content PresentationPage_contentRight">
              {this.props.children}
            </div>
          </div>
        </Fade>
      );
    }

  }
}

export default PresentationPage;
