import React,{Component} from 'react';
//import {addTodo} from '../actions/index';

/*export default class extends Component{
	render(){
		const {dispatch} = this.props; //组件的props赋值给dispatch
		return(
			<div>
			 <form onSubmit={e=>{
			 	e.preventDefault();
			 	if(!this.input.value.trim()){ //如果输入的是空格，则返回
			 		return
			 	}
			 	dispatch(addTodo(this.input.value)); //如果为有效输入，则执行action中的addTodo action,并将input.value最为text的值传入
			 	this.input.value="" //执行完毕addTodoAction后将input.value设置为空
			 }}>
			  <input type="text" placeholder="请输入任务" ref={node=>{this.input=node}}/> 
			  <button type="submit">Add Todo </button>
			 </form>
			</div>
			)
	}
}
*/

export default class extends Component{
	render(){

		const {submitClick} = this.props;//接收container组件所传来的submitClick方法，也可以通过dispatch(state,action)的方式来实现（参见上面备注)
		return (
             <div className="inner">
              <form onSubmit={e=>{
              	e.preventDefault(); //防止提交时事件冒泡
              	if(!this.input.value.trim()){
              		return
              	}
              	submitClick(this.input.value);
              	this.input.value=""
              }}>
               <input type="text" placeholder="what to do???" ref={node=>{this.input=node}}/>
               <button type="submit">Add-Todo</button>
              </form>
             </div>
			)
	}
}