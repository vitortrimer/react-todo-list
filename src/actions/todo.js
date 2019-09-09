export function addTodo(todo) {
  return { type: 'ADD_TODO', todo }
}

export function doneTodo(todo) {
  return { type: 'DONE_TODO', todo}
}

export function doneToTodo(todo) {
  return { type: 'DONE_TO_TODO', todo}
}

export function editTodo(id) {
  return { type: 'EDIT_TODO', id}
}

export function removeTodo(id) {
  return { type: 'REMOVE_TODO', id}
}

