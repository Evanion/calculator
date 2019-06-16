import React from 'react';
import { makeStyles } from '@material-ui/styles';

interface StyleProps {
  [key: string]: string | number;
}
interface Props {
  children: React.ReactNode;
  override?: StyleProps;
}

const useStyles = makeStyles((theme: any) => ({
  base: (props: StyleProps) => ({
    minHeight: '100vh',
    color: theme.textColor,
    fontFamily: theme.textFontFamily,
    background: theme.appBackground,
    ...props,
  }),
}));

export const BaseStyles = ({ children, override = {} }: Props) => {
  const classes = useStyles(override);
  return <div className={classes.base}>{children}</div>;
};
