import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const EditableTodoItem = props => {
  const { task, edit } = props;
  const [name, setName] = useState(task.name);
  let TodoFormOrItem;

  const handleChange = evt => setName(evt.target.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    props.onTaskEdit(task, name);
  };

  const handleKeyDown = evt => {
    if (evt.keyCode === 27) props.onCloseEdit();
  };

  if (edit) {
    TodoFormOrItem = (
      <TodoForm
        autoFocus={true}
        value={name}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onBlur={handleSubmit}
        onKeyDown={handleKeyDown}
      />
    );
  } else {
    TodoFormOrItem = (
      <TodoItem
        task={task}
        onOpenEdit={props.onOpenEdit}
        onTaskDelete={props.onTaskDelete}
        onTaskComplete={props.onTaskComplete}
      />
    );
  }

  return <li>{TodoFormOrItem}</li>;
};

export default EditableTodoItem;
