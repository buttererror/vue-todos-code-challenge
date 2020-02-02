<template>
  <v-app>
    <v-toolbar
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
    </v-toolbar>
    <v-content>
      <v-layout
        class="mt-5"
        align-content-start
        fill-height
        justify-center
      >
        <v-flex xs7>
          <TodoForm />
          <TodoSummary :todos="todos"/>
          <TodoList :todos="todos"/>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>

<script>
import TodoForm from '@/components/todo-form'
import TodoList from '@/components/todo-list'
import TodoSummary from "@/components/todo-summary";
import Todo from '@/Todo';

export default {
  name: 'App',
  components: {
     TodoSummary,
     TodoForm,
     TodoList,
  },
  data () {
    return {
      title: 'Vue Todos',
       todos: null
    }
  },
   created() {
      this.todos = Todo.fetch();
   }
}
</script>
