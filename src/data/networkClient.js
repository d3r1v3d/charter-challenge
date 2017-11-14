import ApolloClient, { createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
	
	networkInterface : createNetworkInterface({
		
		uri: 'https://api.github.com/graphql',
		
		opts: {
			
			headers: {
				
				// https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
				"Authorization": "Bearer "

			}
		}
	
	})
});

export default client