import React, { Component } from 'react'
import { Link } from "react-router-dom";

import PresentationPageElement from '../PresentationPageElement'
//Import config with presentation pages information
import config from '../config.js';


class Presentation extends Component {
  constructor(props) {
    super(props);

    /*
    * Expected props:
    *   /
    */
    this.test = null;

    this.config = config;
  }

  fetchElementsFromConfig() {
    const config = this.config
    var allElements = [];

    config.forEach(function(element, index) {
      const headline = element.headlineA;
      const headline2 = element.headlineB;
      const name = element.name;
      const id = element.id;
      allElements.push(
        <Link key={index} to={"/" + id}>
          <PresentationPageElement orientationRight>
            <h1 className="headline headline-1 headline-bright">{headline}</h1>
            <h2 className="headline headline-2 headline-bright">{headline2}</h2>
            <p className="text text-bright">{name}</p>
          </PresentationPageElement>
        </Link>);
    });

    return allElements;
  }

  render() {
    const fetch = this.fetchElementsFromConfig();

    return (
      <div>
        {fetch}
      </div>
    );
  }
}

export default Presentation;
