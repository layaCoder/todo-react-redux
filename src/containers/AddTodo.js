import {connect} from 'react-redux';
import AddTodo from '../components/AddTodo';


//AddTodo逻辑组件
export default connect()(AddTodo); //将component组件包含在container组件中