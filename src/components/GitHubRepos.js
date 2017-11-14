import { compose }                 from 'react-apollo';
import { branch, renderComponent } from 'recompose';
import { queryStatement }          from '../data/query';
import Loading                     from './Loading';


export default compose( 
	
	queryStatement, 
	
	branch(
	
		({loading}) => loading,
	
		renderComponent(Loading)
		
	) 
)
