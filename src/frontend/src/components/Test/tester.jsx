import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { json } from 'body-parser';

const tester = ({ author }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          telescope {
            getPosts(page: 0, perPage: 10, filter: { author: "Josue" }) {
              title
            }
          }
        }
      `}
      render={data => {
        const formattedData = JSON.stringify(data.telescope.getPosts);
        const newData = Object.values(formattedData);
        return <h1>{newData}</h1>;
      }}
    ></StaticQuery>
  );
};
export default tester;
