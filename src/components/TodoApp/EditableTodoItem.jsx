import React, { Component } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

class EditableTodoItem extends Component {
  state = {
    edit: this.props.task.name
  };

  handleChange = evt => this.setState({ edit: evt.target.value });

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onTaskEdit(this.props.task, this.state.edit);
  }

  renderFormOrItem() {
    const { task, edit, onTaskComplete, onTaskDelete, onOpenEdit } = this.props;
    if (edit) {
      return (
        <TodoForm
          autoFocus={true}
          value={this.state.edit}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          onBlur={this.props.onCloseEdit}
        />
      );
    }
    return (
      <TodoItem
        task={task}
        onOpenEdit={onOpenEdit}
        onTaskDelete={onTaskDelete}
        onTaskComplete={onTaskComplete}
      />
    );
  }

  render() {
    return <li>{this.renderFormOrItem()}</li>;
  }
}

export default EditableTodoItem;
