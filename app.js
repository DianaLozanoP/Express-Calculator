//use express
const express = require('express');
//call functions for mathematical operations
const { mean, median, mode } = require('./operations')
const ExpressError = require('./expressError')

//set up app as per express documentation3
const app = express();


app.get('/mean', (req, res) => {
    try {
        const nums = req.query;
        let vals = Object.values(nums)
        let arr = vals.toString().split(',').map(Number);
        return res.json({
            response: {
                "operation": "mean",
                "value": mean(arr)
            }
        });
    }
    catch (e) {
        next(e);
    }

})

app.get('/median', (req, res) => {
    try {
        const nums = req.query;
        let vals = Object.values(nums)
        let arr = vals.toString().split(',').map(Number);
        return res.json({
            response: {
                "operation": "median",
                "value": median(arr)
            }
        });
    }
    catch (e) {
        next(e);
    }

})

app.get('/mode', (req, res) => {
    try {
        const nums = req.query;
        let vals = Object.values(nums)
        let arr = vals.toString().split(',').map(Number);
        return res.json({
            response: {
                "operation": "mode",
                "value": mode(arr)
            }
        });
    }
    catch (e) {
        next(e);
    }

})

// // Error handler
app.use(function (err, req, res, next) {
    //Note the 4 parameters!
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;

    // set the status and alert the user
    return res.status(status).json({
        error: { message, status }
    });
});

//always set up at the end
app.listen(3000, () => {
    console.log("Server running on port 3000")
});