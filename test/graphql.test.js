const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('../src/backend/web/graphql/index');

const mocks = {
  Feed: () => ({
    id: 'testFeedId',
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
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  mockEntireSchema: false,
});

server.listen();
