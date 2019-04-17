import React from "react";

const pluralize = n => (n > 1 ? "tasks" : "task");

const TodoStatus = ({ remaining }) => {
  return (
    <p>
      {remaining} {pluralize(remaining)} left to be completed.
    </p>
  );
};

export default TodoStatus;
