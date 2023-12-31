function mean(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    return total / nums.length
}

function median(nums) {
    const sorted = Array.from(nums).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

function mode(nums) {
    //organize first the array
    const sorted = Array.from(nums).sort((a, b) => a - b);
    //count how many times, each number is there
    let count = {};
    sorted.forEach(function (e) {
        if (count[e] === undefined) {
            count[e] = 0;
        }
        count[e] += 1;
    })
    let final = Object.keys(count).reduce(function (a, b) {
        return count[a] > count[b] ? a : b
    });
    return Number(final);
}
function checkForNumbers(obj) {
    let vals = Object.values(obj)
    let arr = vals.toString().split(',').map(Number);
    let b = NaN
    let final = ''
    for (let val of arr) {
        if (Object.is(val, b)) {
            final += val;
        }
    }
    if (final.length > 1) {
        return final
    }
    else return 'okay';
}
module.exports = { mean, median, mode, checkForNumbers }

