import React, { memo } from 'react';
import Typography from '@material-ui/core/Typography';

type Props = {
  children: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }: Props) => (
  <Typography component="h2" variant="h6" color="primary" gutterBottom>
    {children}
  </Typography>
);

export default memo(Title);
