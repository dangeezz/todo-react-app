import React from "react";
import EditableTodoItem from "./EditableTodoItem";

const EditableTodoList = props => {
  const { tasks, editing } = props;

  return (
    <ul>
      {tasks.map(task => (
        <EditableTodoItem
          key={task.id}
          edit={task.id === editing}
          task={task}
          onOpenEdit={props.onOpenEdit}
          onCloseEdit={props.onCloseEdit}
          onTaskEdit={props.onTaskEdit}
          onTaskComplete={props.onTaskComplete}
          onTaskDelete={props.onTaskDelete}
        />
      ))}
    </ul>
  );
};

export default EditableTodoList;
