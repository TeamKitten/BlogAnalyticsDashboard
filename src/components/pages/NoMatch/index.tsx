import React, { memo } from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Copyright from '../../atoms/Copyright';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(2),
  },
  main: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const NoMatchPage: React.FC<RouteComponentProps> = ({
  history,
}: RouteComponentProps) => {
  const classes = useStyles();

  const toTopPage = (): void => history.replace('/');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          TeamKitten Blog Analytics
        </Typography>
        <div className={classes.main}>
          <Typography color="error" component="h2" variant="h6">
            404 Not Found.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            size="large"
            onClick={toTopPage}
          >
            TOP
          </Button>
        </div>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default memo(withRouter(NoMatchPage));
