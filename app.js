//use express
const express = require('express');
//call functions for mathematical operations
const ExpressError = require('./expressError')
const { mean, median, mode, checkForNumbers } = require('./operations');


//set up app as per express documentation3
const app = express();


app.get('/mean', function (req, res, next) {
    try {
        const nums = req.query;
        if (Object.keys(nums).length === 0) {
            throw new ExpressError("nums are required", 400)
        }
        if (checkForNumbers(nums)) {
            let vals = Object.values(nums)
            let arr = vals.toString().split(',').map(Number);
            return res.json({
                response: {
                    "operation": "mean",
                    "value": mean(arr)
                }
            });
        }
        else {
            throw new ExpressError(checkForNumbers(nums) + 'is not a number', 400)
        }
    }
    catch (e) {
        next(e);
    }

})

app.get('/median', (req, res, next) => {
    try {
        const nums = req.query;
        if (Object.keys(nums).length === 0) {
            throw new ExpressError("nums are required", 400)
        }
        if (checkForNumbers(nums)) {
            let vals = Object.values(nums)
            let arr = vals.toString().split(',').map(Number);
            return res.json({
                response: {
                    "operation": "median",
                    "value": median(arr)
                }
            });
        }
        else {
            throw new ExpressError(checkForNumbers(nums) + 'is not a number', 400)
        }
    }
    catch (e) {
        next(e);
    }

})

app.get('/mode', function (req, res, next) {
    try {
        const nums = req.query;
        if (Object.keys(nums).length === 0) {
            throw new ExpressError("nums are required", 400)
        }
        if (checkForNumbers(nums)) {
            let vals = Object.values(nums)
            let arr = vals.toString().split(',').map(Number);
            return res.json({
                response: {
                    "operation": "mode",
                    "value": mode(arr)
                }
            });
        }
        else {
            throw new ExpressError(checkForNumbers(nums) + 'is not a number', 400)
        }
    }
    catch (e) {
        next(e);
    }

})

app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
})

// Error handler
app.use(function (err, req, res, next) {
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