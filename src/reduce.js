const reduce = (input,funcA,variB) => {
    if(variB == null && input.length == 0) return undefined;
    if(variB != null) return input.reduce(funcA,variB);
    return input.reduce(funcA);
} 

module.exports = reduce
