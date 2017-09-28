import React from 'react';
import ReactDOM from 'react-dom';
import Polyrhythms from '../src/components/Polyrhythms';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Polyrhythms />, div);
});
