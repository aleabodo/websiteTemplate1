import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';

import Menu from 'react-animated-menus'

import PresentationPageElement from '../PresentationPageElement'

/*
* Code START --------------------
*/
const Code1 = () => {
  const codeString = 'npm install --save react-animated-menus';
  return <SyntaxHighlighter language='batch' style={okaidia}>{codeString}</SyntaxHighlighter>;
}
const Code2 = () => {
  const codeString = "import Menu from 'react-animated-menus'";
  return <SyntaxHighlighter language='jsx' style={okaidia}>{codeString}</SyntaxHighlighter>;
}
const Code3 = () => {
  const codeString = `const food = {
  a: {
    value: "Button1",
    action: () => {
      alert("test1")
    }
  },
  b: {
    value: "Button2",
    action: () => {
      alert("test2")
    }
  },
  c: {
    value: "Button3",
    action: () => {
      alert("test3")
    }
  }
}

//Width/Height unit is px by default
<Menu width={35} color="rgb(123, 192, 222)" food={food} />

//Replace 'width' optionally width 'height' but don't use both at the same time.
//To keep the ratio between height and width one
//has to be given and the other one is calculated by the component.

//One example with height:

<Menu height={"50px"}" food={food} />

//'color' is optional. The defaul value is 'rgb(255, 255, 255)' if it's not defined.`;
  return <SyntaxHighlighter language='jsx' style={okaidia}>{codeString}</SyntaxHighlighter>;
}
/*
* Code END ----------------------
*/


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
    const food = {
      a: {
        value: "Button1",
        action: () => {
          alert("test1")
        }
      },
      b: {
        value: "Button2",
        action: () => {
          alert("test2")
        }
      },
      c: {
        value: "Button3",
        action: () => {
          alert("test3")
        }
      }
    }

    return (
      <div>
        <PresentationPageElement orientationRight>
          <h1 className="headline headline-1 headline-bright">Code highlighting example:</h1>
          <p className="text text-bright text-arrow">
            Using react-syntax-highlighter npm package right here. Feel free to remove it, if you don't need it.
          </p>
        </PresentationPageElement>
        <PresentationPageElement orientationRight>
          <h1 className="headline headline-1 headline-bright">Installation:</h1>
          <div className="text text-bright">
            <Code1 />
          </div>
        </PresentationPageElement>
        <PresentationPageElement orientationRight>
          <h1 className="headline headline-1 headline-bright">Usage:</h1>
          <div className="text text-bright">
            Add following line at the beginning of your document:<br />
            <Code2 /><br />
            Component usage:<br />
            <Code3 />
          </div>
        </PresentationPageElement>
      </div>
    );
  }
}

export default Presentation;
