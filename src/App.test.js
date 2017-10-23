import React from 'react';
import ReactDOM from 'react-dom';
import TriviaApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TriviaApp />, div);
});
