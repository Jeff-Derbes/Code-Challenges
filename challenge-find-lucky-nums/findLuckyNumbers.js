// Write your code below this line.

function luckyNumbers(n) {
    let maxNums = [1,2,3,4,5,6,7,8,9,10]
    let arr = []
    for (let i = 0; i < n; i++) {
      let randNum = Math.floor(Math.random() * maxNums.length);
      arr.push(maxNums[randNum])
      maxNums.splice(randNum, 1)
    }
    return arr
  };

console.log(luckyNumbers(4))