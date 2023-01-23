import React from "react";
import CreateTask from "./CreateTask";
import TaskItem from "./TaskItem";
import { connect } from 'react-redux';
import { isFetchingSelector, sortedTaskSelector } from '../tasks/tasks.selectors';
import * as taskAction from '../tasks/tasks.actions';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

class TasksList extends React.Component {
  state = {
    tasks: []
  }

  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <main className="todo-list">
        <CreateTask onCreateTask={this.props.createTask} />
        <ul className="list">
        {this.props.isFetching && <Spinner />}
          {this.props.tasks.map(task => (
            <TaskItem
              key={task.id}
              {...task}
              onDelete={this.props.deleteTask}
              onChange={this.props.updateTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

const mapState = state => {
  return {
    tasks: sortedTaskSelector(state),
    isFetching: isFetchingSelector(state),
  };
};

const mapDispatch = {
  getTasksList: taskAction.getTasksList,
  updateTask: taskAction.updateTasksList,
  deleteTask: taskAction.deleteTasksList,
  createTask: taskAction.createTasksList,
};

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
  isFetching: PropTypes.bool,
};

TasksList.defaultProps = {
  isFetching: false,
};

export default connect(mapState, mapDispatch)(TasksList);