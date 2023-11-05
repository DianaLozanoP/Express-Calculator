class ExpressError extends Error {
    constructor(msg, status) {
        super();
        this.msg = msg;
        this.status = status;
        //stack is there because we called super
        console.error(this.stack)
    }
}

module.exports = ExpressError;