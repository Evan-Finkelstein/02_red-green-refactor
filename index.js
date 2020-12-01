



const getName = ({ name } = obj) => {

    return name
};

const copyAndPush = (arr, num) => {
    return [...arr, num]

};

const capitalizeAndFilter = (arr) => {

    const filtered = arr.filter(name => !name.startsWith('f'));
    newArr = filtered.map(name => { return name.toUpperCase() })
    return newArr

};


module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter,
}


