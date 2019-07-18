import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Board from './pages/Board';

interface Props {
  knightPosition: number[];
}

export default function Root(props: Props): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Board knightPosition={props.knightPosition} />
    </>
  );
}
