import React,{Component} from 'react';

export default class extends Component{
	render(){
		const {active,children,onClick} = this.props;
		if(active){
			return <span>{children}</span> //如果为选中项，则显示为普通文本
		}
		return (
             <a href="#" onClick={
             	e=>{
             		e.preventDefault();
             		onClick() //接收container组件中的onClick方法
             		
             	}
             }>
                {children}
             </a>

			)
	}
}