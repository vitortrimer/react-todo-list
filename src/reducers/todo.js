const initialState = {
  todo: [
    {id: 3, value: 'Subir Todo no git'},
    {id: 4, value: 'Enviar email'},
    {id: 5, value: 'Criar API com Node'},
  ],
  done: [
    {id: 1, value: 'Criar layout da Todo List'},
    {id: 2, value: 'Criar actions e reducers'},
  ]
}

export default (state=initialState, action) => {
  let todo = []
  let done = []
  switch(action.type) {
    case "ADD_TODO":
      todo = state.todo
      todo.push(action.todo)
      return Object.assign({}, state, {todo})
    case "DONE_TODO":
      state.todo.map(filterTodo => {
        if(filterTodo.id !== action.todo.id)
          todo.push(filterTodo)
      })
      done = state.done
      done.push(action.todo)
      return Object.assign({}, state, {todo, done})
    case "DONE_TO_TODO":
      state.done.map(filterDone => {
        if(filterDone.id !== action.todo.id)
          done.push(filterDone)
      })
      todo = state.todo
      todo.push(action.todo)
      return Object.assign({}, state, {todo, done})
    case "REMOVE_TODO":
      state.done.map(filterDone => {
        if(filterDone.id !== action.id)
          done.push(filterDone)
      })
      state.todo.map(filterTodo => {
        if(filterTodo.id !== action.id)
          todo.push(filterTodo)
      })
      return Object.assign({}, state, {todo, done})
    default:
      return state
  }
}