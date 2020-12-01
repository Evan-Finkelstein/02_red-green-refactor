

// const getName = (obj) => {
//     const { name } = obj;
//     return name
// };
const getName = ({ name } = obj) => {

    return name
};



module.exports = {
    getName,
    // copyAndPush,
}


