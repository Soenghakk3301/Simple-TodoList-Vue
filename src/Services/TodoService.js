import TodoRepository from '../respository/TodoRepository'

const TodoService = {
  async getTodos() {
    const todos = await TodoRepository.getTodos()
    return todos
  },

  async getTodoById(id) {
    const todo = await TodoRepository.getTodoById(id)
    return todo
  },

  async addTodo(todo) {
    const newTodo = await TodoRepository.addTodo(todo)
    return newTodo
  },

  async updateTodo(id, updatedTodo) {
    const updated = await TodoRepository.updateTodo(id, updatedTodo)
    return updated
  },

  async deleteTodo(id) {
    await TodoRepository.deleteTodo(id)
  },
}

export default TodoService
