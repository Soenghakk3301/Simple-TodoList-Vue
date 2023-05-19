const TodoRepository = {
  async getTodos() {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')
    return todos
  },

  async getTodoById(id) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')
    const todo = todos.find((todo) => todo.id === parseInt(id))

    if (todo === -1) {
      throw new Error(`Todo with id=${id} not found`)
    }

    return todo
  },

  async addTodo(todo) {
    let todos = JSON.parse(localStorage.getItem('todos') || '[]')

    const newTodo = {
      id: todos.length + 1,
      title: todo.title,
      details: todo.details,
      complete: todo.complete,
    }

    todos = [...todos, newTodo]

    localStorage.setItem('todos', JSON.stringify(todos))
    return newTodo
  },

  async updateTodo(id, updatedTodo) {
    const todos = await this.getTodos()
    const index = todos.findIndex((todo) => todo.id === parseInt(id))

    if (index === -1) {
      throw new Error(`Todo with id=${id} not found`)
    }

    const updated = { ...todos[index], ...updatedTodo }
    const updatedTodos = [
      ...todos.slice(0, index),
      updated,
      ...todos.slice(index + 1),
    ]

    localStorage.setItem('todos', JSON.stringify(updatedTodos))

    return updated
  },

  async deleteTodo(id) {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]')
    const index = todos.findIndex((todo) => todo.id === id)
    todos.splice(index, 1)
    localStorage.setItem('todos', JSON.stringify(todos))
  },
}

export default TodoRepository
