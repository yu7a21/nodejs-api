const NotFoundException = require("../Exception/NotFoundException");
const TodoUsecase = require("../Usecase/TodoUsecase")

class TodoController
{
    constructor() {
        this.todo_usecase = new TodoUsecase();
    }

    //新規作成
    create(req,res) {

    }

    //タスク情報取得
    async show(req, res) {
        let todo_usecase = new TodoUsecase();
        try {
            var todo = await todo_usecase.show(req.params.id);
            return res.json({
                "id":todo.getId(),
                "title":todo.getTitle(),
                "description":todo.getDescription(),
                "category_id":todo.getCategoryId()
            });
        } catch (err) {
            if (err instanceof NotFoundException) {
                return res.status(err.getStatusCode()).json({
                    "message":err.getMessage(),
                    "status_code":err.getStatusCode()
                });
            }
        }
    }

    //更新　
    update(req, res) {

    }

    //削除
    delete(req, res) {

    }

    //一覧　
    list(req, res) {
    
    }
}

module.exports = TodoController

