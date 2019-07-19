import React from 'react';
import { useDrag } from 'react-dnd';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { ItemTypes } from '../../Constants/Constants';

const useStyles = makeStyles({
  root: {
    fontSize: '3vw',
    fontWeight: 'bold',
    cursor: 'move',
    opacity: 1,
    '&.isDragging': {
      opacity: 0.5,
    },
  },
});

export default function Knight(): JSX.Element {
  const classes = useStyles();

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.KNIGHT },
    collect: (monitor): { isDragging: boolean } => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className={classNames(classes.root, { isDragging })}>
      <span>♘</span>
    </div>
  );
}
