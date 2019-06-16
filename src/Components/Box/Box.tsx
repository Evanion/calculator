import React from 'react';
import classnames from 'classnames';
import { makeStyles } from '@material-ui/styles';

interface StyleProps {
  primary?: boolean;
}

interface Props extends StyleProps {
  children: React.ReactNode;
  className?: string;
}

const useStyles = makeStyles(({textColor, contentBackground}: any) => {
  console.log(textColor, contentBackground);
  return{
  wrapper: ({primary}: StyleProps)=>({
    padding: 34,
    border: `1px solid ${textColor}`,
    backgroundColor: primary ? contentBackground.primary : contentBackground.base,
  }),

}; });

export const Box = ({primary, className, ...rest}: Props) => {
  const classes = useStyles({primary});
  return (
    <div className={classnames([classes.wrapper, className])} {...rest} />
  );
};
