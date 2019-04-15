import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const EditableTodoItem = props => {
  const { task, edit } = props;

  const renderFormOrItem = (edit) ? <TodoForm /> : <TodoItem task={task} />;

  return <li>{renderFormOrItem}</li>;
};

export default EditableTodoItem;