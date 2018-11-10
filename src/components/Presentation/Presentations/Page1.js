import React, { Component } from 'react';

import PresentationPageElement from '../PresentationPageElement'


class Presentation extends Component {
  constructor(props) {
    super(props);

    /*
    * Expected props:
    *   /
    */
    this.test = null;
  }

  render() {
    const img1 = require("./images/1.jpg");
    const img2 = require("./images/2.jpg");
    return (
      <div>
        <PresentationPageElement img={img1}>
          <h1 className="headline headline-1 headline-bright">Some examples:</h1>
          <h2 className="headline headline-4 headline-bright">Smaller headline</h2>
          <ul className="list list-bright">
            <li>
              Item1
            </li>
            <li>
              Item1
            </li>
            <li>
              Item2
            </li>
          </ul>
          <p className="text text-bright">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat lacus ac eros blandit, eu viverra sem gravida. Fusce sodales euismod vulputate. Vivamus aliquet ipsum eros, sit amet rutrum libero mattis et. Curabitur blandit dignissim velit, et posuere sapien viverra sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tincidunt nulla mauris, vel venenatis nibh cursus ac. Duis tincidunt justo sed tortor varius cursus.
          </p>
        </PresentationPageElement>
        <PresentationPageElement img={img2} orientationRight>
          <h1 className="headline headline-1 headline-bright">!Some Information!:</h1>
          <p className="text text-bright text-arrow">
            If you want a fast setup of your website project go to 'src/components/Presentation/'.<br />
            You can find a config where you can configurate all the pages you want to have. 'Component' is the file name of the component
            of the page. 'id' is the id that is displayed in the url routing system.<br />
            Take a look into 'src/components/Presentation/Presentations/'. <br />
            There you have all your pages components. In this case some examples that I have set up for you. <br /><br />

            Take a deeper look into 'src/styles/'. There you have all CSS files that style the website.
          </p>
          <p className="text text-bright">
            <b>Important: </b><br />
            You will need to run this website on a server. Google Firebase Hosting has always been a good solution for me:<br />
            <a target="_blank" href="https://firebase.google.com" /><br />
            The reason is that react-router a server instance needs to push the history.
          </p>
        </PresentationPageElement>
      </div>
    );
  }
}

export default Presentation;
