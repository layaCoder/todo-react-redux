import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp=combineReducers({todos,visibilityFilter}); //将分开的reducer合并
export default todoApp