import React from "react";

const TodoItem = ({task}) => {
  return (
    <React.Fragment>
      <input defaultChecked={task.completed} type="checkbox" />
      <span>{task.name}</span>
      <button style={{ fontWeight: "bold" }}>x</button>
    </React.Fragment>
  );
};

export default TodoItem;
