import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  black: {
    backgroundColor: 'black',
    color: 'white',
  },
  white: {
    backgroundColor: 'white',
    color: 'black',
  },
});

interface Props {
  black: boolean;
  children: ReactNode;
}

export default function Square({ black, children }: Props): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classNames(
      classes.root,
      { [classes.black]: black },
      { [classes.white]: !black },
    )}>
      {children}
    </div>
  );
}
