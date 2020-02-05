import store from './store/index';
export default class Todo {
   constructor(id) {
      /*
      * {
      *  text: null,
      *  done: null,
      *  status: null,
      *  id: null
      * }
      *
      *
      * */
      this.text = null;
      this.done = null;
      this.status = null;
      this.id = null;
      this.todoIndex = null;
      this.id = !store.state.tasks.todos.length ? 0 : store.state.tasks.todos[store.state.tasks.todos.length - 1].id + 1;
      if(arguments.length) {
         this.id = id;
         store.state.tasks.todos.forEach((todo, index) => {
            if(todo.id == id) {
               this.text = todo.text;
               this.done = todo.done;
               this.status = todo.status;
               this.todoIndex = index;
            }
         });
      }
   }
   save() {
      this.todoIndex = this.todoIndex != null ? this.todoIndex : store.state.tasks.todos.length;
      store.state.tasks.todos.splice(this.todoIndex, 1, {
         text: this.text,
         done: this.done,
         id: this.id,
         status: this.status
      });
      localStorage.setItem('todos', JSON.stringify(store.state.tasks.todos));
   }
   remove() {
      store.state.tasks.todos.splice(this.todoIndex, 1);
   }
   static find(id) {
      let todo = new Todo(id);
      store.state.tasks.todos.forEach((item, index) => {
         if(item.id == id) {
            todo.id = id;
            todo.text = item.text;
            todo.done = item.done;
            todo.status = item.status;
            todo.todoIndex = index;
         }
      });
      return todo;
   }
   static fetch() {
      return store.state.tasks.todos = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];
   }
   static removeCompleted() {
      store.state.tasks.todos.forEach((todo, index) => {
         if(todo.done) {
            store.state.tasks.todos.splice(index, 1);
         }
      });
   }
}