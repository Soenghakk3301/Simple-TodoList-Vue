import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTodoView from '../views/AddTodoView.vue'
import EditTodoView from '../views/EditTodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/AddTodo',
      name: 'AddTodo',
      component: AddTodoView,
    },
    {
      path: '/EditTodo/:id',
      name: 'EditTodo',
      component: EditTodoView,
      props: true,
    },
  ],
})

export default router
