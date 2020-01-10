import Vue from 'vue';

export const updateTodoList = (state, {todo, index}) => {
   let todoIndex = index ? index : state.todos.length;
   if(!todo) {
      return Vue.delete(state.todos, index);
   }
   Vue.set(state.todos, todoIndex, todo);
};