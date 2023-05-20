let cachedTodos = []

async function initCache() {
  cachedTodos = JSON.parse(localStorage.getItem('todos') || '[]')
}

initCache()

const TodoRepository = {
  async getTodos() {
    return cachedTodos
  },

  async getTodoById(id) {
    const todo = cachedTodos.find((todo) => todo.id === parseInt(id))

    if (!todo) {
      throw new Error(`Todo with id=${id} not found`)
    }

    return todo
  },

  async addTodo(todo) {
    const newTodo = {
      id: cachedTodos.length + 1,
      title: todo.title,
      details: todo.details,
      complete: todo.complete,
    }

    const newTodos = [...cachedTodos, newTodo]

    localStorage.setItem('todos', JSON.stringify(newTodos))
    return newTodo
  },

  async updateTodo(id, updatedTodo) {
    const index = cachedTodos.findIndex((todo) => todo.id === parseInt(id))

    if (index === -1) {
      throw new Error(`Todo with id=${id} not found`)
    }

    const updated = { ...cachedTodos[index], ...updatedTodo }

    const newTodos = [
      ...cachedTodos.slice(0, index),
      updated,
      ...cachedTodos.slice(index + 1),
    ]

    localStorage.setItem('todos', JSON.stringify(newTodos))

    return updated
  },

  async deleteTodo(id) {
    const index = cachedTodos.findIndex((todo) => todo.id === parseInt(id))

    if (index === -1) {
      throw new Error(`Todo with id=${id} not found`)
    }

    const newTodos = [
      ...cachedTodos.slice(0, index),
      ...cachedTodos.slice(index + 1),
    ]

    localStorage.setItem('todos', JSON.stringify(newTodos))
    return
  },
}

export default TodoRepository
