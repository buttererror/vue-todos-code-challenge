<template>
  <div>
    <h2 class="display-1 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${todos.length}`">
          {{ todos.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-divider class="mt-4"/>

    <v-layout
      class="my-2 pa-3 subheading"
      align="center"
    >
      <strong class="mx-4 info--text text--darken-3">
        Remaining: {{ remainingTodos }}
      </strong>

      <v-divider vertical/>

      <strong class="mx-4 black--text">
        Completed: {{ completedTodos }}
      </strong>

      <v-spacer/>

      <v-progress-circular
        :value="progress"
        class="mr-2"
      />
    </v-layout>

    <v-divider class="mb-3"/>


  </div>
</template>

<script>
     import {mapState, mapGetters} from 'vuex';
   export default {
      name: "TodoSummary",
      computed: {
         ...mapState({
            todos: state => state.todos
         }),
         ...mapGetters({
            remainingTodos: 'remainingTodos',
            completedTodos: 'completedTodos',
            progress: 'progress'
         })
      }
   }
</script>

<style scoped>

</style>