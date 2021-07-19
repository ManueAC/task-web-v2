import React from 'react';
import { CircularProgressProps, CircularProgress } from '@material-ui/core';

export interface TextLoadingProps {
  children: React.ReactNode;
  loading: boolean;
  circularProgressProps?: CircularProgressProps;
}

export const TextLoading: React.FC<TextLoadingProps> = ({
  loading,
  circularProgressProps,
  children,
}) => {
  const defaultCircularProgressProps: CircularProgressProps = {
    style: { marginLeft: 5 },
    size: 15,
    color: 'primary',
  };

  if (circularProgressProps)
    Object.assign(defaultCircularProgressProps, circularProgressProps);

  return (
    <>
      {children}
      {loading ? <CircularProgress {...defaultCircularProgressProps} /> : null}
    </>
  );
};
