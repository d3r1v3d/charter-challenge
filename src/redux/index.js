import _  from 'lodash';

//actions
export const HANDLE_CHANGE  = "handle_change"

export const HANDLE_SORT 	= "handle_sort"

//action creators
export const handle_change =  (input,list) => ({
	
	type: HANDLE_CHANGE,
	
	data: input,
	
	list: list
});

export const handle_sort =  (input,list,orderBy) => ({
	
	type: HANDLE_SORT,
	
	data: input,

	orderBy: orderBy,
	
	list: list
});

//reducer
export const queryReducer = (previousState, action) => {
	
	switch (action.type) {
		
		//handles filtering the table 
		//handles updating our <input/> react component
		case HANDLE_CHANGE : 
			
			const newList = action.list.filter( (a,b) => {
				
				//grab all values within the object and convert to string
				const values = Object.values(a).join(" "); 
				
				//does our string of object values include text from our <input/> box?
				return values.includes( action.data ) ? true : false

			})	

			return Object.assign( { }, previousState, { input:action.data, filterList:newList } )

		case HANDLE_SORT : 

			const sort = _.orderBy(action.list , action.data, action.orderBy || "asc")

			return Object.assign( { }, previousState, { filterList : sort, orderBy : (action.orderBy === "asc" ? "desc" : "asc") } )
	
		default:
		   
			return Object.assign( { }, {input:"", orderBy:null} )
	}


}

