import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { observe } from './Game';

observe((knightPosition: number[]): void => {
  ReactDOM.render(<Root knightPosition={knightPosition} />, document.querySelector('#app'));
});
