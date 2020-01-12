import store from './store/index';
export default class Todo {
   constructor(todo , index) {
      this.todo = todo;
      this.id = index;
      this.todoCopy = JSON.parse(JSON.stringify(this.todo));
   }
   removeTodo() {
      store.commit('tasks/updateTodoList', {todo: null, index: this.id.toString()});
   }
   updateTodo(todo, props, values) {
      this.todoCopy = todo;
      props.forEach((prop, index) => {
         this.todoCopy[prop] = values[index];
      });
      store.commit('tasks/updateTodoList', {todo: this.todoCopy, index: this.id.toString()});
   }
   static insertTodo(todo) {
      store.commit('tasks/updateTodoList', {todo});
   }
   static fetchTodos() {
      store.state.tasks.todos = JSON.parse(localStorage.getItem("todos_storage")) || [];
   }
   static saveTodos(todos) {
      localStorage.setItem("todos_storage", JSON.stringify(todos));
   }
   static removeAllcompleted(todos) {
      store.state.tasks.todos = todos.filter((todo) => !todo.done);
   }
}