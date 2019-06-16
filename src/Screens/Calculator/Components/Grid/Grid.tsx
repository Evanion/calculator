import React from 'react';
import { makeStyles } from '@material-ui/styles';

interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}));
export const Grid = (props: Props) => {
  const classes = useStyles();
  return <div {...props} className={classes.wrapper} />;
};
