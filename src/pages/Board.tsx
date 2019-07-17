import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Knight from '../components/Knight/Knight';
import Square from '../components/Square/Square';

function renderSquare(i: number, [knightX, knightY]: number[]): JSX.Element {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const isKnightHere = knightX === x && knightY === y;
  const black = (x + y) % 2 === 1;
  const piece = isKnightHere ? <Knight /> : null;

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black}>
        {piece}
      </Square>
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexWrap: 'wrap',
  },
});

interface Props {
  knightPosition: number[];
}

export default function Board(props: Props): JSX.Element {
  const classes = useStyles();

  const squares = [];

  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i, props.knightPosition));
  }

  return (
    <div className={classes.root}>
      {squares}
    </div>
  );
}
