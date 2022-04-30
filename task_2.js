const users = require('./task2.json')


const person = {};
const result = users.filter(({name}) =>(!person[name] && (person[name] = 1)));

console.log(result)
console.log(result.length)

