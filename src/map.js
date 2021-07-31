const map = (input, option) => {
    return input.map(x => option(x))
}

module.exports = map;