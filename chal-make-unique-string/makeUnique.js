// Write your solution below:

function makeUnique(str) {
    let strSet = new Set(str.split(""))
    return [...strSet].join("")
}