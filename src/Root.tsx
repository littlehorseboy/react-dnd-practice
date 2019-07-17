import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Board from './pages/Board';

export default function Root(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Board knightPosition={[0, 0]} />
    </>
  );
}
