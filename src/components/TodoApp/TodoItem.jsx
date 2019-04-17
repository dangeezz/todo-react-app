import React from "react";
import PropTypes from "prop-types";

const TodoItem = ({ task, onTaskComplete, onTaskDelete, onOpenEdit }) => {
  return (
    <React.Fragment>
      <input
        onChange={() => onTaskComplete(task.id)}
        defaultChecked={task.completed}
        type="checkbox"
      />
      <span onDoubleClick={() => onOpenEdit(task)}>{task.name}</span>
      <button onClick={() => onTaskDelete(task)}>x</button>
    </React.Fragment>
  );
};

TodoItem.propTypes = {
  task: PropTypes.shape({
    completed: PropTypes.bool,
    name: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }).isRequired,
  onTaskComplete: PropTypes.func.isRequired,
  onOpenEdit: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired
};

export default TodoItem;
