export const remainingTodos = (state, getters) => {
   return state.todos.length - getters.completedTodos

};

export const completedTodos = (state) => {
   return state.todos.filter(todo => todo.status === 'complete').length;

};

export const progress =(state, getters) => {
   if(!state.todos.length) return 0;
   return getters.completedTodos / state.todos.length * 100
};