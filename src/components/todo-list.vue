<template lang="html">
  <v-card v-if="todos.length > 0">
    <v-slide-y-transition
      class="py-0"
      group
      tag="v-list"
    >

      <TodoItem
        :key="index"
        v-for="(todo, index) in todos"
        :todo="todo"
        :todo-key="index"
      />

    </v-slide-y-transition>
  </v-card>
</template>

<script>
   import TodoItem from '@/components/todo-item';
   import {mapState} from 'vuex';

   export default {
      computed: {
         ...mapState({
            todos: state => state.todos
         })
      },
      components: {
         TodoItem,
      }
   }
</script>

<style lang="css">
</style>
