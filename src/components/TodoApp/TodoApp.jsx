import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import EditableTodoList from "./EditableTodoList";
import TodoStatus from "./TodoStatus";
class TodoApp extends Component {
  constructor() {
    super();
    this.todo = new Todo();
  }

  state = {
    tasks: [],
    newTask: "",
    editedTask: null,
    filter: "all"
  };

  componentDidMount() {
    this.setState({ tasks: this.todo.fetch() });
  }

  componentDidUpdate() {
    this.todo.save(this.state.tasks);
  }

  handleChange = evt => this.setState({ newTask: evt.target.value });

  handleSubmit = evt => {
    evt.preventDefault();
    const { tasks, newTask } = this.state;
    if (newTask.trim()) {
      this.setState({
        tasks: [Todo.create(newTask), ...tasks],
        newTask: ""
      });
    }
  };

  handleTaskComplete = id => {
    this.completeTask(id);
  };

  handleDeleteTask = taskToDelete => {
    const deleteTask = task => task.id !== taskToDelete.id;
    const tasks = this.state.tasks.filter(deleteTask);
    this.setState({ tasks });
  };

  handleOpenEdit = task => {
    const { tasks } = this.state;
    const editedTask = tasks.find(t => t.id === task.id);
    if (!editedTask.completed) {
      const id = editedTask.id;
      this.setState({ editedTask: id });
    }
  };

  handleCloseEdit = () => {
    this.setState({ editedTask: null });
  };

  handleTaskEdit = (taskToEdit, name) => {
    let { tasks } = this.state;
    tasks = tasks.map(task => {
      if (task.id === taskToEdit.id) {
        task = { ...task, name };
      }
      return task;
    });
    this.setState({ tasks, editedTask: null });
  };

  handleFilterSelect = filter => this.setState({ filter });

  completeTask(id) {
    const tasks = [...this.state.tasks].map(task => {
      if (task.id === id) {
        task = { ...task, completed: !task.completed };
      }
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
    const totalActiveTask = (sum, task) => {
      if (!task.completed) sum += 1;
      return sum;
    };

    return tasks.reduce(totalActiveTask, 0);
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
        <TodoForm
          value={this.state.newTask}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />

        <EditableTodoList
          tasks={this.filteredTasks()}
          editing={this.state.editedTask}
          onOpenEdit={this.handleOpenEdit}
          onCloseEdit={this.handleCloseEdit}
          onTaskEdit={this.handleTaskEdit}
          onTaskDelete={this.handleDeleteTask}
          onTaskComplete={this.handleTaskComplete}
        />

        <TodoStatus remaining={this.computeNumOfActiveTask()} />

        {this.renderTasksControl()}
      </div>
    );
  }
}

export default TodoApp;
