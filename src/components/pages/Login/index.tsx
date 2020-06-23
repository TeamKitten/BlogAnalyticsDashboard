import React, { memo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from 'react-router-dom';
import ErrorPage from '../ErrorPage';
import Copyright from '../../atoms/Copyright';
import Loading from '../Loading';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    margin: theme.spacing(1),
  },
  main: {
    width: '100%',
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const Login: React.FC = () => {
  const classes = useStyles();
  const [user, loading, error] = useAuthState(firebase.auth());

  const signInWithGitHub = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          TeamKitten Blog Analytics
        </Typography>
        <div className={classes.main}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<GitHubIcon />}
            size="large"
            onClick={signInWithGitHub}
          >
            GitHubでログイン
          </Button>
        </div>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default memo(Login);
