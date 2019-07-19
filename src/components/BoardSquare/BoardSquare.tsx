import React, { ReactNode } from 'react';
import { useDrop } from 'react-dnd';
import { makeStyles } from '@material-ui/core/styles';
import Square from '../Square/Square';
import { canMoveKnight, moveKnight } from '../../Game';
import { ItemTypes } from '../../Constants/Constants';
import Overlay from '../Overlay/Overlay';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
});

interface Props {
  x: number;
  y: number;
  children: ReactNode;
}

export default function BoardSquare({ x, y, children }: Props): JSX.Element {
  const classes = useStyles();

  const black = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.KNIGHT,
    drop: (): void => moveKnight(x, y),
    canDrop: (): boolean => canMoveKnight(x, y),
    collect: (monitor): { isOver: boolean; canDrop: boolean } => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className={classes.root}>
      <Square black={black}>{children}</Square>
      {isOver && !canDrop && (
        <Overlay color="red" />
      )}
      {!isOver && canDrop && (
        <Overlay color="yellow" />
      )}
      {isOver && canDrop && (
        <Overlay color="green" />
      )}
    </div>
  );
}
