import { useDispatch } from 'react-redux';
import { LoggedQueryResult, withLogged } from '../../generated/types.d';
import { withApollo } from '../../../lib/apollo';
import React, { useEffect } from 'react';
import { setUserLoggedStatus } from '../../redux/actions/user';

const CheckAuth: React.FC<any> = (props: LoggedQueryResult) => {
  const dispatch = useDispatch();
  const isLoggedIn = !!props.data?.logged;
  useEffect(() => {
    dispatch(setUserLoggedStatus(isLoggedIn))
  }, [isLoggedIn]);
  
  return null;
};

// @ts-ignore
export default withApollo()(withLogged()(CheckAuth));
