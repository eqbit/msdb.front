import App from "next/app";
import React from "react";
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import { initializeStore } from '../src/redux/store';

class MyApp extends App<any> {
  render() {
    const { Component: Page, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Page {...pageProps} />
      </Provider>
    );
  }
}

// @ts-ignore
export default withRedux(initializeStore)(MyApp);
