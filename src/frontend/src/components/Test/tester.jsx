import React from 'react';
import { graphql } from 'gatsby';
import { json } from 'body-parser';

const tester = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>;

export const query = graphql`
  {
    telescope {
      getPosts(page: 0, perPage: 10, filter: { author: "Josue" }) {
        title
      }
    }
  }
`;

export default tester;
