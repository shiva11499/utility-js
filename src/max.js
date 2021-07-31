const max = input => {
    return input.reduce(maxArray);
}

function maxArray(a,b) {
    return Math.max(a,b);
}

module.exports = max;