import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";
import TodoStatus from "./TodoStatus";

const todo = new Todo();

class TodoApp extends Component {
  state = {
    tasks: [],
    task: "",
    editId: null,
    filter: "all"
  };

  componentDidMount() {
    this.setState({ tasks: todo.fetch() });
  }

  componentDidUpdate() {
    todo.save(this.state.tasks);
  }

  handleFilterSelect = filter => this.setState({ filter });

  addTask() {
    const { tasks, task } = this.state;
    this.setState({
      tasks: [Todo.create(task), ...tasks],
      task: ""
    });
  }

  editTask(id, name) {
    let tasks = [...this.state.tasks];
    tasks = tasks.map(task => {
      if (task.id === id) {
        task = { ...task, name };
      }
      return task;
    });
    this.setState({ tasks, editId: null, editTask: "" });
  }

  deleteTask(id) {
    const tasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({ tasks });
  }

  completeTask(id) {
    const tasks = [...this.state.tasks].map(task => {
      task.id === id && (task.completed = !task.completed);
      return task;
    });
    this.setState({ tasks });
  }

  clearCompletedTasks = () => {
    const tasks = [...this.state.tasks].filter(task => !task.completed);
    this.setState({ tasks });
  };

  filteredTasks() {
    const { tasks, filter } = this.state;

    if (filter === "active") return tasks.filter(task => !task.completed);
    if (filter === "completed") return tasks.filter(task => task.completed);

    return tasks;
  }

  computeNumOfActiveTask() {
    const { tasks } = this.state;
    return tasks.reduce((sum, task) => {
      !task.completed && sum++;
      return sum;
    }, 0);
  }

  renderTasksControl() {
    const { filter, tasks } = this.state;
    const button = "button is-small";
    const all = filter === "all" ? `${button} is-info` : button;
    const active = filter === "active" ? `${button} is-info` : button;
    const completed = filter === "completed" ? `${button} is-info` : button;
    const hasCompletedTask = tasks.some(task => task.completed);

    return (
      <div className="field is-grouped">
        <div className="control">
          <button
            onClick={() => this.handleFilterSelect("all")}
            className={all}
          >
            All
          </button>
        </div>

        <div className="control">
          <button
            onClick={() => this.handleFilterSelect("active")}
            className={active}
          >
            Active
          </button>
        </div>

        <div className="control">
          <button
            onClick={() => this.handleFilterSelect("completed")}
            className={completed}
          >
            Completed
          </button>
        </div>

        {hasCompletedTask && (
          <div className="control">
            <button
              onClick={this.clearCompletedTasks}
              className="button is-small is-danger"
            >
              Clear completed tasks
            </button>
          </div>
        )}
      </div>
    );
  }

  render() {
    return (
      <div className="todo-app">
        <TodoForm />

        <EditableTodoList
          tasks={this.filteredTasks()}
          editId={this.state.editId}
        />

        <TodoStatus remaining={this.computeNumOfActiveTask()} />

        {this.renderTasksControl()}
      </div>
    );
  }
}

export default TodoApp;
