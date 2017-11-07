import { gql, graphql, compose } from 'react-apollo';
import { branch, renderComponent } from 'recompose';

import Loading from './Loading';
import RepoList from './RepoList';

// https://developer.github.com/v4/
const GET_GITHUB_REPOS = gql`
  query GetGitHubRepos($cursor: String) {
    user(login: "gaearon") {
      login
      repositories(first: 25, after: $cursor) {
        edges {
          cursor
          node {
            name,
            description,
            homepageUrl,
            stargazers{
              totalCount
            },
            resourcePath
          }
        },
        totalCount,
        pageInfo{
          endCursor,
          hasNextPage
        },

      }
      avatarUrl
    }
  }
`;

export default compose(
  graphql(GET_GITHUB_REPOS, {
  props({ data: { loading, login, user, fetchMore } }) {
    return {
      loading,
      user,
      login,
      loadMoreEntries: () => {
        return fetchMore({
          query: GET_GITHUB_REPOS,
          variables: {
            cursor: user.repositories.pageInfo.endCursor
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {

            const newEdges = fetchMoreResult.user.repositories.edges;
            const pageInfo = fetchMoreResult.user.repositories.pageInfo;


           return {

               user: {
                 repositories: {
                   edges: [...previousResult.user.repositories.edges, ...newEdges],
                   pageInfo,
                 },
               },
             };
          }
        })
      }
    }
  }
}),
branch(
  ({ loading }) => loading,
  renderComponent(Loading)
)
)(RepoList);
