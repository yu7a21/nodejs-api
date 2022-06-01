class Todo {
    constructor(id, title, description, category_id){
        this.id = id;
        this.title = title;
        this.description = description;
        this.category_id = category_id;
    }

    getId()
    {
        return this.id;
    }

    getTitle()
    {
        return this.title;
    }

    getDescription()
    {
        return this.description;
    }

    getCategoryId()
    {
        return this.category_id;
    }
}

module.exports = Todo;