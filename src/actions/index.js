let nextTodoId=0; //初始化TodoId

//添加todo action
export const addTodo=(text)=>({
	type:"ADD_TODO",
	id:nextTodoId++,
	text
})

//点击todo action
export const toggleTodo=(id)=>({
	type:"TOGGLE_TODO",
	id
})

//删除todo action
export const deleteTodo=(id)=>({
	type:"DELETE_TODO",
	id
})

//设置可见todolist ation
export const setVisibilityFilter(filter)=>({
	type:"SET_VISIBILITY_FILTER",
	filter
})