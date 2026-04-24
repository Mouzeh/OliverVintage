import { GraphQLClient } from 'graphql-request'
import { useRuntimeConfig } from '#imports'

let client: GraphQLClient | null = null

export function getGraphQLClient() {
  if (!client) {
    const config = useRuntimeConfig()
    client = new GraphQLClient(config.public.wpGraphQLUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  return client
}

export async function graphQLQuery<T = any>(query: string, variables?: Record<string, any>): Promise<T> {
  const client = getGraphQLClient()
  
  try {
    const response = await client.request<T>(query, variables)
    return response
  } catch (error) {
    console.error('GraphQL Query Error:', error)
    throw error
  }
}
