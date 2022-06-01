const Todo = require('../Domain/Todo');

class TodoRepository
{
    constructor()
    {
        this.mysql = require('mysql2');
        this.connection = this.mysql.createConnection({
            host : '127.0.0.1',
            port : '8030',
            user : 'user',
            password : 'password',
            database : 'todo-db',
        });
        this.table = 'users';
    }

    getById(id)
    {
        return new Promise((resolve, reject) => {
            this.connection.query(
                `SELECT * FROM \`${this.table}\` WHERE \`id\` = ?`, [id], function(err, results, fields){
                    if (err) {
                        console.log(err);
                        reject(null);
                    }
                    let result = results[0]
                    resolve(new Todo(result.id, result.title, result.description, result.category_id));
                }
            );
            this.connection.end();
        });
    }

    create(todo)
    {
        return new Promise((resolve, reject) => {
            this.connection.query(
                `INSERT INTO \`${this.table}\` (title, description, category_id) VALUES(?,?,?)`,
                [todo.getTitle(), todo.getDescription(), todo.getCategoryId()],
                function(err, results, fields){
                    if (err) {
                        console.log(err);
                        reject(null);
                    }
                    resolve(results.insertId);
                }
            );
            this.connection.end();
        });
    }
}

// https://stackoverflow.com/a/59119470
// (async() => {
//     var todo = new TodoRepository();
//     var res = await todo.create(new Todo(-1, "テスト2", "テストTODO", 1));
//     console.log(res);
// })();

module.exports = TodoRepository;