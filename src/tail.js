const tail = (input) => {
    if(input == null || input.length == 0 ) {
        return [];
    }
    return input.slice(1)
}

module.exports = tail;