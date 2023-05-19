<template>
  <form @submit.prevent="handleSubmit">
    <label>Title: </label>
    <input type="text" v-model="title" required />
    <label>Details:</label>
    <textarea v-model="details" required></textarea>
    <button>Add Todo</button>
  </form>
</template>

<script>
import TodoService from '../Services/TodoService'
export default {
  data() {
    return {
      title: '',
      details: '',
    }
  },
  methods: {
    async handleSubmit() {
      await TodoService.addTodo({
        title: this.title,
        details: this.details,
        complete: false,
      })

      this.$router.push('/')
    },
  },
}
</script>

<style>
form {
  background: rgb(223, 222, 222);
  padding: 20px;
  border-radius: 10px;
}
lable {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
  box-sizing: border-box;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
form button {
  display: block;
  margin: 20px auto 0;
  background: #00ce89;
  color: #fff;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
}
</style>
