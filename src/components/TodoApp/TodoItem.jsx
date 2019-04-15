import React from "react";

const TodoItem = ({ task, onCompleteTask }) => {
  return (
    <React.Fragment>
      <input
        onChange={evt => onCompleteTask(task.id, evt)}
        defaultChecked={task.completed}
        type="checkbox"
      />
      <span>{task.name}</span>
      <button style={{ fontWeight: "bold" }}>x</button>
    </React.Fragment>
  );
};

export default TodoItem;
