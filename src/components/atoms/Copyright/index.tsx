import React, { memo } from 'react';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const Copyright: React.FC = () => {
  const fullYear = new Date().getFullYear();
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      Copyright ©&nbsp;
      {fullYear}
      &nbsp;
      <Link color="inherit" href="https://teamkitten.me/">
        TeamKitten
      </Link>
    </Typography>
  );
};

export default memo(Copyright);
