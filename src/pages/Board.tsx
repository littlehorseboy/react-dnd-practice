import React from 'react';
import Knight from '../components/Knight/Knight';
import Square from '../components/Square/Square';

function renderSquare(x: number, y: number, [knightX, knightY]: number[]): JSX.Element {
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return <Square black={black}>{piece}</Square>;
}

interface Props {
  knightPosition: number[];
}

export default function Board(props: Props): JSX.Element {
  return (
    <Square black>
      <Knight />
    </Square>
  );
}
