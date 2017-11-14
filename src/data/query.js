import { gql, graphql }  from 'react-apollo';
import { graphqlLodash } from 'graphql-lodash';   
import _                 from 'lodash';

//https://developer.github.com/v4/
const rawQuery = gql`query GetGitHubRepos {
	
  user(login: "gaearon") {
    
    login
    
    repositories(first: 25) {
      
      nodes {
        
        name
        
        hasWikiEnabled
        
        createdAt
        
        updatedAt
        
        #use a directive to "flatten" our returned JSON object
        primaryLanguage @_(get: "name") {
          
          name
          
        }

        url

      }

    }

	}
}`;

//https://github.com/APIs-guru/graphql-lodash 
const { query, transform} = graphqlLodash(rawQuery);

export const queryStatement = graphql(query, {
  
  props : ( { data: { loading, user } } ) => {

    //use graphqlLodash to transform our data, to flatten it 
    const transformedData = transform({ loading , user })

    return {
      
      loading: loading,
      
      repos: _.property('user.repositories.nodes')(transformedData), 
      
      user: _.property('login')(user)

    }

  }

})




