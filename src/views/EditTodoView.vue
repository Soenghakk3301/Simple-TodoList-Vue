<template>
  <form @submit.prevent="handleUpdate">
    <label>Title: </label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Update Todo</button>
  </form>
</template>

<script>
import TodoService from '../Services/TodoService'

export default {
  props: ['id'],
  data() {
    return {
      title: '',
      details: '',
    }
  },
  async mounted() {
    let todo = await TodoService.getTodoById(this.id)
    console.log(todo)
    this.title = todo.title
    this.details = todo.details
  },
  methods: {
    //  handleUpdate() {
    //    fetch(this.uri, {
    //      method: 'PATCH',
    //      headers: {
    //        'Content-Type': 'application/json',
    //      },
    //      body: JSON.stringify({ title: this.title, details: this.details }),
    //    })
    //      .then(() => this.$router.push('/'))
    //      .catch((err) => console.log(err.message))
    //  },

    async handleUpdate() {
      await TodoService.updateTodo(this.id, {
        title: this.title,
        details: this.details,
      })

      this.$router.push('/')
    },
  },
}
</script>

<style></style>
