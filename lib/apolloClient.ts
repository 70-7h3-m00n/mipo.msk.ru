import { ApolloClient, InMemoryCache } from '@apollo/client'
import { routesBack } from '@/config/index'

const client = new ApolloClient({
  uri: `${routesBack.root}${routesBack.graphql}`,
  cache: new InMemoryCache()
})

export default client
