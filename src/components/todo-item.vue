<template lang="html">
  <v-card>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">
          {{ todo.text }}
        </h3>
      </div>
    </v-card-title>
    <v-btn>
      Complete
    </v-btn>
    <v-btn 
      color="error" 
      @click="removeSelectedTodo(todoKey)">
      Delete
    </v-btn>
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
            removeSelectedTodo: 'removeSelectedTodo'
         }),

      }
}
</script>

<style lang="css">
</style>
