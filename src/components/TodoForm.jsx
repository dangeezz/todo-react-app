import React from "react";
import PropTypes from "prop-types";

const TodoForm = props => {
  const { onSubmit, onChange, value } = props;
  return (
    <form onSubmit={onSubmit}>
      <input
        {...props}
        onChange={onChange}
        value={value}
        className="input"
        type="text"
      />
    </form>
  );
};

TodoForm.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TodoForm;
