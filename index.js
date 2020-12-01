



const getName = ({ name } = obj) => {

    return name
};

const copyAndPush = (arr, num) => {
    return [...arr, num]

};

const capitalizeAndFilter = (arr) => {
    const newArr = []
    const filtered = arr.filter(name => !name.startsWith('f'));
    for (let i = 0; i < filtered.length; i++) {

        newArr.push(filtered[i].toUpperCase())


    }
    return newArr

};


module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter,
}


