import { ApolloServer, gql } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { libraries, pages } from 'data'

// Schema definition
const typeDefs = gql`
  # A library has a branch and books
  type Library {
    branch: String!
    pages: [Page!]
  }

  # A book has a title and author
  type Page {
    slug: String!
    title: String!
    id: String!
    category: Category!
  }

  # An author has a name
  type Category {
    name: String!
  }

  # Queries can fetch a list of libraries
  type Query {
    libraries: [Library]
  }
`

const resolvers = {
  Query: {
    libraries() {
      // Return our hardcoded array of libraries
      return libraries
    },
  },
  Library: {
    pages(parent) {
      // Filter the hardcoded array of books to only include
      // books that are located at the correct branch
      return pages.filter((page) => page.branch === parent.branch)
    },
  },
  Page: {
    // The parent resolver (Library.books) returns an object with the
    // author's name in the "author" field. Return a JSON object containing
    // the name, because this field expects an object.
    category(parent) {
      return {
        name: parent.category,
      }
    },
  },

  // Because Book.author returns an object with a "name" field,
  // Apollo Server's default resolver for Author.name will work.
  // We don't need to define one.
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground({
      // options
    }),
  ],
})

const startServer = apolloServer.start()

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  // res.setHeader(
  //   'Access-Control-Allow-Origin',
  //   'https://studio.apollographql.com'
  // )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
