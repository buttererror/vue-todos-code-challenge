<template lang="html">
  <v-text-field
    label="Todo"
    v-model="todo"
    placeholder="What do you have to do?"
    solo
    autofocus
    clearable
    @keyup.enter="addNewTodo"
  >
  </v-text-field>
</template>

<script>
     import {mapMutations} from 'vuex';
export default {
   data() {
      return {
         todo: null
      }
   },
   methods: {
      ...mapMutations({
         insertNewTodo: 'updateTodoList'
      }),
      addNewTodo(e) {
         this.insertNewTodo(e.target.value);
         console.log(this.todo);
         this.todo = null;
      }
   }
}
</script>

<style lang="css">
</style>
