<template lang="html">
  <div id="todo-item">
    <v-divider
      v-if="index !== 0"
      :key="`${index}-divider`"
    />
    <v-list-tile :key="`${index}-${todo.text}`">
      <v-list-tile-action>
        <v-text-field
          solo
          v-if="todo.status === 'edit'"
          v-model="todo.text"
          autofocus
          @keyup.enter="todo.status = 'new'"
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
          @click="todo.status = 'new'"
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
            @click="todo.status = 'edit'"
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
            todo: null
         }
      },
      props: {
         index: VueTypes.number.isRequired,
         todoId: VueTypes.number.isRequired
      },
      created() {
         this.todo = Todo.find(this.todoId);
      },
      methods: {
         removeTodo() {
            this.todo.remove();
         }
      },
      watch: {
         'todo.done'(done) {
            if (done) {
               this.todo.status = "complete";
               this.todo.save();
            } else {
               this.todo.status = "new";
               this.todo.save();
            }
         },
         'todo.text'() {
            this.todo.save();
         },
         todoId() {
            this.todo = Todo.find(this.todoId);
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
