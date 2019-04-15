import React from "react";

const TodoListItem = props => {
  let listItem;
  const {
    task,
    onComplete,
    onDelete,
    onEditChange,
    onEditSubmit,
    onEditBlur,
    onDoubleClick
  } = props;

  if (props.edit) {
    listItem = (
      <form onSubmit={e => onEditSubmit(task.id, e)}>
        <input
          autoFocus={true}
          className="input"
          type="text"
          onChange={onEditChange}
          onBlur={onEditBlur}
          defaultValue={task.name}
        />
      </form>
    );
  } else {
    listItem = (
      <React.Fragment>
        <input
          checked={task.completed}
          onChange={() => {
            onComplete(task.id);
          }}
          type="checkbox"
        />
        <span onDoubleClick={() => onDoubleClick(task.id)}>{task.name}</span>
        <button
          onClick={() => onDelete(task.id)}
          className="button is-small is-danger"
          style={{ fontWeight: "bold" }}
        >
          x
        </button>
      </React.Fragment>
    );
  }

  return <li>{listItem}</li>;
};

export default TodoListItem;
