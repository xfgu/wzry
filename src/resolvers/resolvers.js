import {gql} from 'apollo-boost'
export const typeDefs = gql`
   type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }

   type Launch {
    isInCart: Boolean!
  }

   type Mutation {
    addOrRemoveFromCart(id: ID!): [Launch]
  }
`;

export const resolvers = {};
