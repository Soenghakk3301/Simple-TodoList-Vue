<template>
  <div class="project" :class="{ complete: todo.complete }">
    <div class="actions">
      <h3 @click="showDetails = !this.showDetails">{{ todo.title }}</h3>

      <div class="icons">
        <router-link
          :to="{ name: 'EditTodo', params: { id: todo.id } }"
          :id="todo.id"
        >
          <span class="material-icons"> edit </span>
        </router-link>
        <span @click="deleteTodo" class="material-icons"> delete</span>
        <span @click="toggleTodo" class="material-icons tick"> done </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{ todo.details }}</p>
    </div>
  </div>
</template>

<script>
import TodoService from '../Services/TodoService'

export default {
  props: ['todo'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/todos/' + this.todo.id,
    }
  },
  methods: {
    async deleteTodo() {
      await TodoService.deleteTodo(this.todo.id)
      this.$emit('delete', this.todo.id)
    },
    async toggleTodo() {
      await TodoService.updateTodo(this.todo.id, {
        complete: !this.todo.complete,
      })
      this.$emit('complete', this.todo.id)
    },
  },
}
</script>

<style>
.project {
  margin: 20px auto;
  background: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
  border-left: 4px solid #e90074;
}
h3 {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.material-icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
  cursor: pointer;
}
.material-icons:hover {
  color: #777;
}
.project.complete {
  border-left: 4px solid #00ce89;
}
.project.complete .tick {
  color: #00ce89;
}
</style>
