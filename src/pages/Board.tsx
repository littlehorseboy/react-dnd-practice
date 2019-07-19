import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Knight from '../components/Knight/Knight';
import BoardSquare from '../components/BoardSquare/BoardSquare';

const renderPiece = (x: number, y: number, [knightX, knightY]: number[]): JSX.Element => {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
  return <></>;
};

function renderSquare(i: number, knightPosition: number[]): JSX.Element {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div
      key={i}
      style={{ width: '12.5%', height: '12.5%' }}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
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

  return (
    <div className={classes.root}>
      {new Array(64).fill(null).map((n, index): JSX.Element => (
        renderSquare(index, props.knightPosition)
      ))}
    </div>
  );
}
