<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current" />
    <div v-if="todos.length">
      <div v-for="todo in filteredTodo" :key="todo.id">
        <SingleProject
          :todo="todo"
          @delete="handleDelete"
          @complete="handleComplete"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleTodo.vue'
import FilterNav from '../components/FilterNav.vue'

import TodoService from '../Services/TodoService'

export default {
  props: ['current'],
  components: { SingleProject, FilterNav },
  data() {
    return {
      todos: [],
      current: 'all',
    }
  },
  async mounted() {
    const todosList = await TodoService.getTodos()
    this.todos = todosList

    console.log(this.todos)
  },
  methods: {
    handleDelete(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    handleComplete(id) {
      let p = this.todos.find((todo) => todo.id === id)
      p.complete = !p.complete
    },
  },
  computed: {
    filteredTodo() {
      if (this.current === 'completed')
        return this.todos.filter((todo) => todo.complete)
      if (this.current === 'ongoing')
        return this.todos.filter((todo) => !todo.complete)
      return this.todos
    },
  },
}
</script>
