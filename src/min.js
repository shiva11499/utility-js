const min = input => {
    return input.reduce(minArray);
}

function minArray(a,b) {
    return Math.min(a,b);
}

module.exports = min;