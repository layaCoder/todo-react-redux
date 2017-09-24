import {connect} from 'react-redux';
import {toggleTodo,deleteTodo} from '../actions/index';
import TodoList from '../components/TodoList';

const getVisibleTodos=(todos,filter)=>{
	switch(filter){
		case 'SHOW_ALL':
		 return todos;
		case "SHOW_COMPLETED":
		 return todos.filter(t=>t.completed);
		case "SHOW_ACTIVE":
		 return todos.filter(t=>!t.completed);
		default :
		 throw new Error('Unknown filter'+filter)
	}
};

//根据filter来重新渲染todos的state（显示全部？已完成？未完成？）
const mapStateToProps = (state) =>({ 
	todos:getVisibleTodos(state.todos,state.visibilityFilter)
});

//通过dispach调用action中的行为改变todos的props（点击todo，删除todo）
const mapDispatchToProps={
	onTodoClick:toggleTodo,
	deleteClick:deleteTodo
}

//将逻辑组件container与显示组件component 通过connect方法连接
const VisibleTodoList = connect(mapStateToProps,
	                            mapDispatchToProps)(TodoList);

export default VisibleTodoList

