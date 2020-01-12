<template lang="html">
  <div id="todo-item">
    <v-divider
      v-if="todoKey !== 0"
      :key="`${todoKey}-divider`"
    />
    <v-list-tile :key="`${todoKey}-${todo.text}`">
      <v-list-tile-action>
        <v-text-field
          solo
          v-if="todo.status === 'edit'"
          v-model="todo.text"
          autofocus
          @keyup.enter="todoView.updateTodo(todo, ['status'], ['new'])"
        />
        <v-checkbox
          title="Mark as completed"
          v-else
          v-model="todo.done"
          color="info darken-3"
        >
          <template slot="label">
            <div
              :class="todo.done && 'grey--text' || 'text--primary'"
              class="ml-3"
              v-text="todo.text"
            />
          </template>
        </v-checkbox>
      </v-list-tile-action>

      <v-spacer/>

      <v-scroll-x-transition>
        <v-icon
          title="Submit changes"
          v-if="todo.status === 'edit'"
          clickable
          color="success"
          @click="todoView.updateTodo(todo, ['status'], ['new'])"
        >
          mdi-check
        </v-icon>
        <div v-else>
          <v-icon
            title="Edit"
            v-if="todo.status !== 'complete'"
            clickable
            color="success"
            class="pa-1"
            @click="todoView.updateTodo(todo, ['status'], ['edit'])"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            title="Remove"
            clickable
            color="error"
            class="pa-1"
            @click="removeTodo"
          >
            close
          </v-icon>

        </div>

      </v-scroll-x-transition>
    </v-list-tile>
  </div>

</template>

<script>
   import VueTypes from 'vue-types'
   import Todo from '@/Todo';

   export default {
      data() {
         return {
            todoView: null
         }
      },
      props: {
         todo: VueTypes.object.isRequired,
         todoKey: VueTypes.number.isRequired
      },
      created() {
         this.todoView = new Todo(this.todo, this.todoKey);
      },
      methods: {
         removeTodo() {
            this.todoView.removeTodo();
         }
      },
      watch: {
         'todo.done'(done) {
            if (done) {
               this.todoView.updateTodo(this.todo, ["status", "done"], ["complete", done]);
            } else {
               this.todoView.updateTodo(this.todo, ["status", "done"], ["new", done]);
            }
         },
         'todo.text'(text) {
            this.todoView.updateTodo(this.todo, ["text"], [text]);
         }
      }
   }
</script>

<style lang="scss">
     #todo-item {
          .v-input__slot {
               margin-bottom: 0 !important;
          }
          .v-list__tile__action {
               min-width: 90%;
               .v-text-field {
                    margin-top: 19px;
               }
          }
          .v-input__slot {
               box-shadow: none;
          }

     }
</style>
