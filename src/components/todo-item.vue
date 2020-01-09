<template lang="html">
  <v-card hover light outlined>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          {{ todo.text }}
        </h3>
      </div>
    </v-card-title>
    <v-btn @click="toggleTodoStatus(todoKey)"
    >
      <span v-if="todo.status === 'new'">Completed</span>
         <span v-else>Redo</span>
    </v-btn>
    <v-btn 
      color="error" 
      @click="removeSelectedTodo(todoKey)">
      Delete
    </v-btn>
       <v-chip v-if="todo.status === 'completed'"
                 class="ma-2"
                 color="teal"
                 text-color="white"
       >
            <v-avatar left>
                 <v-icon>mdi-checkbox-marked-circle</v-icon>
            </v-avatar>
            Completed
       </v-chip>

  </v-card>
</template>

<script>
   import VueTypes from 'vue-types'
   import {mapMutations} from 'vuex';

   export default {
   props: {
      todo: VueTypes.object.isRequired,
      todoKey: VueTypes.number.isRequired
   },
      methods: {
         ...mapMutations({
            removeSelectedTodo: 'removeSelectedTodo',
            toggleTodoStatus: 'toggleTodoStatus'
         }),

      }
}
</script>

<style lang="css">
</style>
