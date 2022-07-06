import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getAllPosts = async () => {
  const query = gql`
    query getAllPosts {
      posts {
        title
        tags
        content {
          html
        }
        author {
          name
          biography
        }
        date
      }
    }
  `

  const result = await request(graphqlAPI, query)
  return result.posts
}
