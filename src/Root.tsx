import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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
      <DndProvider backend={HTML5Backend}>
        <Board knightPosition={props.knightPosition} />
      </DndProvider>
    </>
  );
}
