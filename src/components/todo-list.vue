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
        :index="index"
        :todo-id="todo.id"
      />

    </v-slide-y-transition>
  </v-card>
</template>

<script>
   import TodoItem from '@/components/todo-item';
   import VueTypes from 'vue-types'

   export default {
      components: {
         TodoItem,
      },
      props: {
         todos: VueTypes.array.isRequired
      }
   }
</script>

<style lang="css">
</style>
