import { gql } from '@apollo/client';

export const GET_REPO_LIST = gql`
  query Repo($username: String!, $after: String, $before: String) {
    user(login: $username) {
      name
      login
      email
      bio
      company
      location
      twitterUsername
      websiteUrl
      followers {
        totalCount
      }
      following {
        totalCount
      }
      avatarUrl(size: 260)
      repositories(
        first: 5
        orderBy: { field: CREATED_AT, direction: DESC }
        after: $after
        before: $before
      ) {
        totalCount
        nodes {
          id
          name
          description
          url
          createdAt
          visibility
          isFork
          stargazerCount
          issues {
            totalCount
          }
          pullRequests {
            totalCount
          }
          licenseInfo {
            name
          }
          languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
            nodes {
              id
              name
              color
            }
          }
          updatedAt
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
          startCursor
        }
      }
    }
  }
`;
