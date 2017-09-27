import {connect} from 'react-redux';
import {setVisibilityFilter} from '../actions/index';
import Link from '../components/Link';


//将state.visibilityFilter赋值给组件自身的
//props.filter (ownProps.filter定位为"SHOW_ALL/SHOW_ACTIVE/SHOW_COMPLETED")
const mapStateToProps =(state,ownProps)=>({
	active : ownProps.filter === state.visibilityFilter  
});

//点击事件执行action中的setVisibilityFilter方法
const mapDispatchToProps = (dispatch,ownProps)=>({
	onClick:()=>{
		dispatch(setVisibilityFilter(ownProps.filter))
	}
});

const FilterLink =connect(
	mapStateToProps,
	mapDispatchToProps)(Link);

export default FilterLink