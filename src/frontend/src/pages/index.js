import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';

import './index.css';
import Test from '../components/Test/index';
import tester from '../components/Test/index';

export default function IndexPage() {
  return (
    <tester />
    /* <>
      <StaticQuery
        query={graphql`
          query TelescopeUrl {
            site(buildTime: {}) {
              siteMetadata {
                telescopeUrl
              }
            }
          }
        `}
        render={data => <Layout telescopeUrl={data.site.siteMetadata.telescopeUrl} />}
      />
    </> */
  );
}
