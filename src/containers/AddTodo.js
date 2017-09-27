import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo';
import {addTodo} from '../actions/index';


//AddTodo逻辑组件

//AddTodo组件无state状态变化，所以mapStateToProps方法将state不做任何处理返回
const mapStateToProps = (state) =>({   
	 state
});


//将addTodo action作为Props传给component组件
const mapDispatchToProps = { 
	submitClick:addTodo
}



export default connect(mapStateToProps,mapDispatchToProps)(AddTodo); //将component组件包含在container组件中