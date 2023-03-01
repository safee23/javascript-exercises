const sumAll = function(int1, int2) {
    if (typeof int1 !== 'number' || typeof int2 !== 'number'){
        return 'ERROR';
    }
    else if (int1 < 0 || int2 < 0){
        return 'ERROR';
    }
    let output = 0;
    for (let i = Math.min(int1, int2); i <= Math.max(int1, int2); i++){
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
