import React,{Component} from 'react';
import Todo from './Todo';


export default class extends Component{
 render(){
 	const {todos,onTodoClick,deleteClick} = this.props; //接收props中的参数
    return (
          <ul>
           {todos.map(todo=>{ //遍历每一个todo，对其传参渲染成<Todo>组件
           	return (<Todo
           	        key={todo.id}
           	        {...todo}
           	        onClick={()=>onTodoClick(todo.id)}
           	        deleteClick={()=>deleteClick(todo.id)}
           	        />)
           })}
          </ul>
    	)
 }
}