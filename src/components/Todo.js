import React,{Component} from 'react';


export default class extends Component{
	render(){
		const {onClick,completed,text,deleteClick} = this.props //接收props中的参数
		return (
             <li>
              <em onClick={onClick}></em>
              <p onClick={onClick} style={{
              	textDecoration:completed?'line-through':'none'
              }}>
              {text}
              </p>
              <span onClick={deleteClick}> 删除 </span>
             </li>
			)
	}
}
