import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo';

//将component组件包含在container组件中
export default connect()(AddTodo); 