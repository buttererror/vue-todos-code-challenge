import Vue from 'vue';

export const updateTodoList = (state, todoText) => {
   let todoIndex = state.todos.length;
   let todoItem = {text: todoText, status: "new"};
   Vue.set(state.todos, todoIndex, todoItem);
};

export const removeSelectedTodo = (state, key) => {
   Vue.delete(state.todos, key);
};

export const toggleTodoStatus = (state, key) => {
   state.todos[key].status = state.todos[key].status === 'new' ? 'completed' : 'new';
};