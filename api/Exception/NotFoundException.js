class NotFoundException
{
    constructor(message)
    {
        this.message = message;
        this.status_code = 404;
    }

    getMessage()
    {
        return this.message;
    }

    getStatusCode()
    {
        return this.status_code;
    }
}

module.exports = NotFoundException;