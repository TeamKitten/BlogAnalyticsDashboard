import React, { memo } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Loading: React.FC = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <CircularProgress />
      </div>
    </Container>
  );
};

export default memo(Loading);
