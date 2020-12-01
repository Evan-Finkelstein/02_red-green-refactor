



const getName = ({ name } = obj) => {

    return name
};

const copyAndPush = (arr, number) => {
    arr.push(number);
    return arr;

};


module.exports = {
    getName,
    copyAndPush,
}


