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
          @keyup.enter="finishEditingTodo"
        />
        <v-checkbox
          v-else
          v-model="done"
          color="info darken-3"
        >
          <template v-slot:label>
            <div
              :class="done && 'grey--text' || 'text--primary'"
              class="ml-3"
              v-text="todo.text"
            />
          </template>
        </v-checkbox>
      </v-list-tile-action>

      <v-spacer/>

      <v-scroll-x-transition>
        <v-icon
          v-if="todo.status === 'edit'"
          clickable
          color="success"
          @click="finishEditingTodo"
        >
          mdi-check
        </v-icon>
        <div v-else>
          <v-icon
            v-if="todo.status !== 'complete'"
            clickable
            color="success"
            class="pa-1"
            @click="editSelectedTodo"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            clickable
            color="error"
            class="pa-1"
            @click="removeSelectedTodo"
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
   import {mapMutations} from 'vuex';

   export default {
      data() {
          return {
             done: false
          }
      },
      props: {
         todo: VueTypes.object.isRequired,
         todoKey: VueTypes.number.isRequired
      },
      computed: {
          todoItem: {
             get() {
                return this.todo;
             },
             set() {
             }
          }
      },
      methods: {
         ...mapMutations({
            updateTodoItem: 'updateTodoList'
         }),
         editSelectedTodo() {
            this.todoItem.status = "edit";
            this.updateTodoItem({todo: this.todoItem, index: this.todoKey.toString()});
         },
         removeSelectedTodo() {
            this.updateTodoItem({todo: null, index: this.todoKey.toString()});
            this.done = false;
         },
         finishEditingTodo() {
            this.todoItem.status = "new";
         },
      },
      watch: {
         done(done) {
            if(done) {
               this.todoItem.status = "complete";
               this.updateTodoItem({todo: this.todoItem, index: this.todoKey.toString()});
            }else {
               this.todoItem.status = "new";
               this.updateTodoItem({todo: this.todoItem, index: this.todoKey.toString()});
            }
         }
      }
   }
</script>

<style lang="scss">
     #todo-item {
          .v-input__slot {
               margin-bottom: 0!important;
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
