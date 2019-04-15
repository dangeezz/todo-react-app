import React from "react";

const TodoForm = ({ value, onFormSubmit, onFormChange }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <input
        className="input"
        type="text"
        value={value}
        onChange={onFormChange}
      />
    </form>
  );
};

export default TodoForm;
