//Something like Alignment (https://packagecontrol.io/packages/Alignment) really shines in this situation
import React        from 'react';			              //React
import { render }   from 'react-dom';	                  //React-dom
import App          from './container/App';               //root container
import 				 	 './css/index.css'; 			  //styling
import SWorker      from './utils/registerServiceWorker'; //service worker
 
render(
	<App /> ,
	document.getElementById('root') 
);

SWorker();
