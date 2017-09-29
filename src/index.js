import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Polyrhythms from './components/Polyrhythms';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Polyrhythms />,
  document.getElementById('root'));
registerServiceWorker();
