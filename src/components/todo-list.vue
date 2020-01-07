<template lang="html">
  <div>
    <TodoItem
      :key="index"
      v-for="(todo, index) in todos"
      :todo="todo"
      class="mb-3"
    />
  </div>
</template>

<script>
import TodoItem from '@/components/todo-item';
import {mapState} from 'vuex';

export default {
   computed : {
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
