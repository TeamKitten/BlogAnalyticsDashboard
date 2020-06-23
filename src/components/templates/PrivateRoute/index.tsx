import React, { memo } from 'react';
import firebase from 'firebase/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import Loading from '../../pages/Loading';
import ErrorPage from '../../pages/ErrorPage';

type Props = {
  children?: React.ReactNode;
};

const PrivateRoute: React.FC<RouteProps> = (props: RouteProps & Props) => {
  const [user, loading, error] = useAuthState(firebase.auth());

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  if (!user) {
    return <Redirect to="login" />;
  }

  const { children } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props}>{children}</Route>;
};

export default memo(PrivateRoute);
