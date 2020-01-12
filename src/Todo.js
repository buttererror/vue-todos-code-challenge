import store from './store/index';
export default class Todo {
   constructor(todo = {}, index = null) {
      this.todo = todo;
      this.todoKey = index;
      this.todoCopy = JSON.parse(JSON.stringify(this.todo));
      this.storageKey = "todos_storage";

   }
   removeTodo() {
      store.commit('tasks/updateTodoList', {todo: null, index: this.todoKey.toString()});
   }
   updateTodo(todo, props, values) {
      this.todoCopy = todo;
      props.forEach((prop, index) => {
         this.todoCopy[prop] = values[index];
      });
      store.commit('tasks/updateTodoList', {todo: this.todoCopy, index: this.todoKey.toString()});
   }
   createNew(todo) {
      store.commit('tasks/updateTodoList', {todo});
   }
   fetchTodos() {
      store.state.tasks.todos = JSON.parse(localStorage.getItem(this.storageKey)) || [];
   }
   saveTodos(todos) {
      localStorage.setItem(this.storageKey, JSON.stringify(todos));
   }
   removeAllcompleted(todos) {
      store.state.tasks.todos = todos.filter((todo) => !todo.done);
   }
}