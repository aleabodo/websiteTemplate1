import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*
* Import styles CSS START ----------------------------------------------
*/
//General, global
import 'semantic-ui-css/semantic.min.css';
import './styles/app.css';
import './styles/form.css';
import './styles/headlines.css';
import './styles/text.css';

//Frame
import './styles/Frame/Frame.css';

//LoginButton
import './styles/LoginButton/LoginButton.css';

//PageLoading
import './styles/PageLoading/PageLoading.css';

//Presentation
import './styles/Presentation/Presentation.css';
import './styles/Presentation/PresentationPage.css';
import './styles/Presentation/Image.css';

//Xbutton
import './styles/Xbutton/Xbutton.css';
/*
* Import styles CSS END ------------------------------------------------
*/

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
