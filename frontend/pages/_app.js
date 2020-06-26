import React from 'react'
import App  from "next/app";
import Head from 'next/head'
import Layout from '../component/Layout'
import withApollo from '../lib/apollo'
import AppProvider from '../component/Context/AppProvider'
import defaulPage from '../hocs/defaultPage';
import { compose } from 'recompose'

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, isAuthenticated, ctx } = this.props;
    return (
      <>
        <AppProvider>
          <Layout isAuthenticated={isAuthenticated} {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </AppProvider>
        <style jsx global>
          {`
            a {
              color: white !important;
            }
            a:link {
              text-decoration: none !important;
              color: white !important;
            }
            a:hover {
              color: white;
            }
            .card {
              display: inline-block !important;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
      </>
    );
  }
}

export default withApollo({ssr: true})(MyApp);