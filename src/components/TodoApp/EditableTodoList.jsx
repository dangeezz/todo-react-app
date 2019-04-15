import React from "react";
import EditableTodoItem from "./EditableTodoItem";

const EditableTodoList = props => {
  const { tasks, editId } = props;

  return (
    <ul>
      {tasks.map(task => (
        <EditableTodoItem key={task.id} edit={task.id === editId} task={task} />
      ))}
    </ul>
  );
};

export default EditableTodoList;
