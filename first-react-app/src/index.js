import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App_Hooks from './App_Hooks'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><App /><App_Hooks/></div>, document.getElementById('root'));

registerServiceWorker();
