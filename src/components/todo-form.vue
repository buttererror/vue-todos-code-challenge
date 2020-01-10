<template lang="html">
  <v-layout 
    row 
    wrap>

    <v-flex xs12>
      <v-text-field
        v-model="todoText"
        outline
        autofocus
        @keyup.enter="addNewTodo"
      >
        <template v-slot:label>
          <v-icon style="vertical-align: middle">mdi-pencil</v-icon>
          What do you<strong> have to do</strong>?
        </template>


      </v-text-field>
    </v-flex>

  </v-layout>

</template>

<script>
   import {mapMutations} from 'vuex';

   export default {
      data() {
         return {
            todoText: null
         }
      },
      methods: {
         ...mapMutations({
            insertNewTodo: 'updateTodoList',
         }),
         addNewTodo(e) {
            if (e.target.value) {
               let todo = {text: e.target.value, status: "new"};
               this.insertNewTodo({todo});
               this.todoText = null;
            }
         }
      }
   }
</script>

<style lang="css">
</style>
