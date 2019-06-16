import React from 'react';
import { makeStyles } from '@material-ui/styles';
interface Props {
  children: React.ReactNode;
}

const useStyles = makeStyles(theme => ({
  cell: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    boxSizing: 'border-box',
    margin: '20px auto',
    padding: 0,
  },
}));
export const Cell = (props: Props) => {
  const classes = useStyles();
  return <div className={classes.cell} {...props} />;
};
