import Vue from 'vue';

export const updateTodoList = (state, todo) => {
   let todoIndex = Object.entries(state.todos).length;
   Vue.set(state.todos, todoIndex, todo);
};