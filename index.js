
const request = require('superagent');



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
const fetchQuotes = async () => {
    const { body } = await request.get(' futuramaapi.herokuapp.com/api/quotes');


    return body.results.slice(0)

};

module.exports = {
    getName,
    copyAndPush,
    capitalizeAndFilter,
    fetchQuotes
}


