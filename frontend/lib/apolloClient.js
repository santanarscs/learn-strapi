const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

export async function getStandaloneApolloClient() {
  const { ApolloClient, InMemoryCache, HttpLink } = await import("@apollo/client");
  return new ApolloClient({
    link: new HttpLink({
      uri: `${API_URL}/graphql`,
    }),
    cache: new InMemoryCache()
  })
}