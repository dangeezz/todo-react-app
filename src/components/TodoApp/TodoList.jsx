import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = props => {
  const {
    tasks,
    editId,
    onComplete,
    onDelete,
    onEditSubmit,
    onEditBlur,
    onEditChange,
    onDoubleClick
  } = props;

  const taskList = tasks.map(task => (
    <TodoListItem
      key={task.id}
      edit={task.id === editId}
      onComplete={onComplete}
      onDelete={onDelete}
      onEditChange={onEditChange}
      onEditSubmit={onEditSubmit}
      onDoubleClick={onDoubleClick}
      onEditBlur={onEditBlur}
      task={task}
    />
  ));
  return <ul>{taskList}</ul>;
};

export default TodoList;
