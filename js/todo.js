const app = Vue.createApp({
    data() {
        return {
            todo: [
                { id: 0, title: "Revamp this website", completed: false},
                { id: 1, title: "Write a new Blog", completed: false},
                { id: 2, title: "Make a todo list", completed: true}
            ],
            newTodo: ''
        }
    },
    methods: {
        toggleComplete(todo) {
            todo.completed = !todo.completed
        },
        addTodo() {
            if (this.newTodo != '') {
                newTodo = { id: this.todo.length, title: this.newTodo, completed: false}
                this.todo.unshift(newTodo)
                this.newTodo = ''
            }
        },
        showDeleteBtn () {
            
        }
    },
    computed: {
        incompleteTodo() {
            return this.todo.filter((item) => !item.completed)
        },
        completedTodo() {
            return this.todo.filter((item) => item.completed)
        }
    }
})

app.mount("#TODO_LIST")