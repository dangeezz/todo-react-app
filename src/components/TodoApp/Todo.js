export default class Todo {
  static app_id = "todo_app_id";
  static uid = 0;

  fetch() {
    const store = localStorage.getItem(Todo.app_id) || "[]";
    const tasks = JSON.parse(store);
    tasks.forEach((task, idx) => (task.id = idx));
    Todo.uid = tasks.length;
    return tasks;
  }

  save(todos) {
    return localStorage.setItem(Todo.app_id, JSON.stringify(todos));
  }
}
