import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0.5,
  },
});

interface Props {
  color: string;
}

export default function Overlay(props: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.overlay} style={{ backgroundColor: props.color }}></div>
  );
}
