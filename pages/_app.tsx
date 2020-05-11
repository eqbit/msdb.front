import App from "next/app";
import React from "react";
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../src/redux/store';
import CheckAuth from '../src/components/utils';
import '../src/styles/index.scss';

class MyApp extends App<any> {
  render() {
    const { Component: Page, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <CheckAuth/>
        <Page {...pageProps} />
      </Provider>
    );
  }
}

// @ts-ignore
export default withRedux(initializeStore)(MyApp);
