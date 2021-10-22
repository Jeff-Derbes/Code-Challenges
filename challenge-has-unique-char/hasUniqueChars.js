// Write your code below

let testWord = 'Bob'

function isUnique(str) {
    return new Set(str).size == str.length;
  }

console.log(isUnique("bob"))


