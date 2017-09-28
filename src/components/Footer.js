import React,{Component} from 'react';
import FilterLink from '../containers/FilterLink';


export default class extends Component{
	render(){
		return(
		//(SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED为Container组件FilterLink中的ownProps参数)
		<p className="footer">
		 Show:{" "}
		 <FilterLink filter="SHOW_ALL"> 
		  ALL
		 </FilterLink>
		 {" | "}
		 <FilterLink filter="SHOW_ACTIVE">
		 Active
		 </FilterLink>
		 {" | "}
		 <FilterLink filter="SHOW_COMPLETED">
		 Completed
		 </FilterLink>
		</p>
		)
	}
}