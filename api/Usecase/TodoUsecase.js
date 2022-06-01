const res = require('express/lib/response');
const NotFoundException = require('../Exception/NotFoundException');
const TodoRepository = require('../Infra/TodoRepository')

class TodoUsecase
{
    constructor() {
        this.todo_repository = new TodoRepository();
    }

    async show(id)
    {
        res = await this.todo_repository.getById(id);
        console.log(res);
        if (res == null) {
            throw new NotFoundException(`ID : ${id}のタスクは存在しません`);
        } else {
            return res;
        }
    }
}

module.exports = TodoUsecase;