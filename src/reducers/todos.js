const todo=(state,action) => {
	switch (action.type){
		case:'ADD_TODO':
	    return {
		id:action.id,
		text:action.text,
		completed:false,
	};
        case:'TOOGLE_TODO':
        	if(state.id!==action.id){
        		return state
        }
        return Object.assign({},state,{completed:!state.completed});
        default:
        return state
 }
}


const todos=(state,action) =>{
	switch (action.type){
		case:'ADD_TODO': //如果是添加一条todo，则在原array中增添一个新的todo
		return [
               ...state,
               todo(undefined,action)
		];
		case 'TOOGLE_TODO': //如果是点击一条todo，则改变这条todo的completed状态
		return state.map((t)=>todo(t,action));
		case 'DELETE_TODO':
		return state.filter(todo=>todo.id!==action.id) //如果原state的id不等于action.id，则保留，等于则表示选中一条todo，及被过滤掉，
	}
};

export default todos