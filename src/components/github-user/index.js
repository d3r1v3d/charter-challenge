import {gql, graphql, compose} from 'react-apollo';
import {withState} from 'recompose';
import {branch, renderComponent} from 'recompose';

import Loading from '../Loading';
import GithubUser from './GithubUser';

// https://developer.github.com/v4/
const GET_GITHUB_USER = gql`
  query GetGitHubRepos($login: String!, $repoCount: Int!, $repoSort: RepositoryOrder!) {
    user(login: $login) {
      login
      name
      bio
      avatarUrl
      createdAt
      location
      websiteUrl
      repositories(first: $repoCount, orderBy: $repoSort) {
        totalCount
        nodes {
          id
          name
          url
          createdAt
          description
          stargazers(first: 0) {
            totalCount
          }
        }
      }
    }
  }
`;

export default compose(
  withState('repoCount', 'setRepoCount', 5),
  graphql(
    GET_GITHUB_USER,
    {
      options: ({login, repoCount}) => ({
        variables: {
          login: login,
          repoCount,
          repoSort: {field: 'STARGAZERS', direction: 'DESC'}
        }
      }),
      props: ({ data: { loading, user } }) => ({
        loading,
        user: user ? user : null
      })
    }
  ),
  branch(
    ({loading}) => loading,
    renderComponent(Loading)
  )
)(GithubUser);
