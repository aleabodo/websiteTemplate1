import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import Image from '../components/Presentation/Image.js';
import PresentationPage from '../components/Presentation/PresentationPage.js';
import Login from '../components/Login/Login.js';
import LoginButton from '../components/Login/LoginButton.js';
import PageLoading from '../components/PageLoading.js';
//Import config with presentation pages information
import config from '../components/Presentation/config.js';

import arrow from "../images/down-arrow.svg";


class Presentation extends Component {
  constructor(props) {
    super(props);

    this.toggleRenderLogin = this.toggleRenderLogin.bind(this);
    this.getNextPageId = this.getNextPageId.bind(this);
    this.getPrevPageId = this.getPrevPageId.bind(this);

    /*
    * Expected props:
    *   id: String
    */
    this.state = {
      config: config,
      loginShouldRender: false,
      pageLoading: true
    }
  }


  componentDidMount() {
    //Color backgroundColor grey
    document.getElementById('body').style.backgroundColor = 'rgb(37, 37, 37)';
  }


  togglePageLoading() {
    this.setState({
      pageLoading: !this.state.pageLoading
    });
  }


  toggleRenderLogin() {
    this.setState({
      loginShouldRender: !this.state.loginShouldRender
    });
  }


  getPageById(id) {
    var pageNumber = 0;
    config.forEach((element, index) => {
      if(element.id === this.props.id) {
        pageNumber = index;
      }
    });
    return pageNumber;
  }


  getNextPageId(currentPageNumber) {
    const nextPageNumber = currentPageNumber + 1;
    const id = this.state.config[nextPageNumber].id;
    return id;
  }


  getPrevPageId(currentPageNumber) {
    const prevPageNumber = currentPageNumber - 1;
    const id = this.state.config[prevPageNumber].id;
    return id;
  }

  getProgress() {
    const currentPageNumber =  this.getPageById(this.props.id) + 1;
    const config = this.state.config;
    const totalPages = config.length;
    return( (currentPageNumber / totalPages) * 100 );
  }


  render() {
    //Setup some variables
    const currentPageNumber =  this.getPageById(this.props.id);
    const config = this.state.config[currentPageNumber];
    const image = require("../images/Presentation/" + (currentPageNumber + 1) + ".jpg");
    const progressBar = String(this.getProgress()) + '%';

    /*
    * Arrow buttons
    */
    var arrowUp = false;
    var arrowDown = false;
    if(currentPageNumber > 0) {
      var prevPageId = this.getPrevPageId(currentPageNumber);
      arrowUp = true;
    }
    if(currentPageNumber < this.state.config.length - 1) {
      var nextPageId = this.getNextPageId(currentPageNumber);
      arrowDown = true;
    }

    return (
      <div>
        <PageLoading loading={this.state.pageLoading} />
        <LoginButton clickAction={this.toggleRenderLogin} />
        <Login shouldRender={this.state.loginShouldRender} toggleRenderLogin={this.toggleRenderLogin} />


        <div className="Presentation_sidebar">
          <h1>{config.name}</h1>
            <CSSTransition
              in={arrowUp}
              timeout={600}
              classNames="fadeZoom"
              unmountOnExit
            >
              <div className={"Presentation_arrowUp"}><Link to={"/" + prevPageId}><img src={arrow} alt="Up" /></Link></div>
            </CSSTransition>
            <CSSTransition
              in={arrowDown}
              timeout={600}
              classNames="fadeZoom"
              unmountOnExit
            >
              <div className={"Presentation_arrowDown"}><Link to={"/" + nextPageId}><img src={arrow} alt="Down" /></Link></div>
            </CSSTransition>
        </div>
        <div className="Presentation_sidebarProgressbar" style={{height: progressBar}}>

        </div>
        <div className="Presentation_rightbar">
          <div className="Presentation_frameImage">
            <Image img={image} headlineA={config.headlineA} headlineB={config.headlineB} />
          </div>
          <div className="Presentation_frameContent">
            <PresentationPage presentation={config.component} />
          </div>
        </div>
      </div>
    );
  }
}

export default Presentation;
