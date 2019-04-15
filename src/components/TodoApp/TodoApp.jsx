import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoStatus from "./TodoStatus";

const createTask = name => ({
  completed: false,
  id: Todo.uid++,
  name
});
const todo = new Todo();

export default class TodoApp extends Component {
  state = {
    tasks: [],
    editId: null,
    newTask: "",
    editTask: "",
    filter: "all"
  };

  componentDidMount() {
    this.setState({
      tasks: todo.fetch()
    });
  }

  componentDidUpdate() {
    todo.save(this.state.tasks);
  }

  handleFormChange = e => this.setState({ newTask: e.target.value });

  handleFormSubmit = e => {
    e.preventDefault();

    if (this.state.newTask.trim()) {
      this.addTask();
    }
  };

  handleDoubleClick = id => {
    this.state.tasks.forEach(task => {
      if (task.id == id && !task.completed) {
        this.setState({ editId: id });
      }
    })
  }

  handleEditBlur = () => this.setState({ editId: null });

  handleEditChange = e => this.setState({ editTask: e.target.value });

  handleEditSubmit = (id, e) => {
    e.preventDefault();
    const { editTask } = this.state;

    if (editTask.trim()) {
      this.editTask(id, editTask);
    }
  };

  handleComplete = id => this.completeTask(id);

  handleDelete = id => this.deleteTask(id);

  selectFilter(filter) {
    this.setState({ filter });
  }

  addTask() {
    const { tasks, newTask } = this.state;
    this.setState({
      tasks: [createTask(newTask), ...tasks],
      newTask: ""
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
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => !task.completed);
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
          <button onClick={() => this.selectFilter("all")} className={all}>
            All
          </button>
        </div>

        <div className="control">
          <button
            onClick={() => this.selectFilter("active")}
            className={active}
          >
            Active
          </button>
        </div>

        <div className="control">
          <button
            onClick={() => this.selectFilter("completed")}
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
        <TodoForm
          value={this.state.newTask}
          onFormChange={this.handleFormChange}
          onFormSubmit={this.handleFormSubmit}
        />

        <TodoList
          tasks={this.filteredTasks()}
          editId={this.state.editId}
          onEditChange={this.handleEditChange}
          onEditSubmit={this.handleEditSubmit}
          onEditBlur={this.handleEditBlur}
          onDoubleClick={this.handleDoubleClick}
          onDelete={this.handleDelete}
          onComplete={this.handleComplete}
        />

        <TodoStatus numOfActiveTask={this.computeNumOfActiveTask()} />

        {this.renderTasksControl()}
      </div>
    );
  }
}
