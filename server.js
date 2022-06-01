const express = require('express');
const app = express();
const TodoController = require('./api/Controller/TodoController');
const todo_controller = new TodoController();

app.route('/todo/:id')
    .get(todo_controller.show);

app.listen(3000);