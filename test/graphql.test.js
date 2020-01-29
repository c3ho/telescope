// const { mockServer } = require('graphql-tools');
const { makeExecutableSchema } = require('apollo-server-express');
const { resolvers } = require('../src/backend/web/graphql/index');

const typeDefs = `
# 'Feed' matches our Feed type used with redis
type Feed {
  id: String
  author: String
  url: String
}

# 'Post' matches our Post type used with redis
type Post {
  id: String
  author: String
  title: String
  html: String
  text: String
  published: String
  updated: String
  url: String
  site: String
  guid: String
}

# Queries to fetch data from redis
type Query {
  getFeedById(id: ID!): Feed
  getFeedByUrl(url: String!): Feed
  getFeeds: [Feed]
  getFeedsCount: Int
  getPost(id: ID!): Post
  getPosts(page: Int, perPage: Int): [Post]
  getPostsCount: Int
}
`;

/* const mocks = {
  Feed: () => ({
    id: 'feedID123',
    author: 'testFeedAuthor',
    url: 'testFeedURL.com',
  }),
  Post: () => ({
    id: 'postID123',
    author: 'testPostAuthor',
    title: 'testPostTitle',
    html: 'testPostHTML',
    text: 'testPostText',
    published: 'testPostPublished',
    updated: 'testPostDate',
    url: 'testPostURL',
    site: 'testPostSite',
    guid: 'testPostGuid',
  }),
}; */

const schema = makeExecutableSchema({ typeDefs, resolvers });
console.log(schema);
/* const server = mockServer({
  schema,
  mocks,
  mockEntireSchema: false,
}); */

test('random test', () => {
  // const result = server.query();
  // expect(result).rejects.toBe(3);
});
