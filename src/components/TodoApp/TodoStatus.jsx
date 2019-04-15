import React from "react";

const pluralize = n => (n > 1 ? "tasks" : "task");

const TodoStatus = ({ numOfActiveTask }) => {
  return (
    <p>
      {numOfActiveTask} {pluralize(numOfActiveTask)} left to be
      completed.
    </p>
  );
};

export default TodoStatus;
