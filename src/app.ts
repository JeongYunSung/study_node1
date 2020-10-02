// import * as express from 'express';
// import index from './index'

// const app = express();

// app.listen(3000, () => console.log('server started'));

import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQLServer({
    typeDefs: "src/graphql/schema.graphql",
    resolvers
});

server.start(() => console.log('GraphQL Server Running'));