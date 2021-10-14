let numbers = [1, 4, 11 ,2 ,37, -4];

const findMaxMin = (arr) => {
  let max = arr[0]
  let min = arr[0]
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max){
      max = arr[i];
    }else if (arr[i] < min){
      min = arr[i];
    }
  }return [min, max]
}


/*let min = 99999
let max = -99999

for(let i = 0; i < numbers.length; i++){
  if (numbers[i] > max){
    max = numbers[i]
  }else if (numbers[i] < min){
    min = numbers[i];
  };
}
*/

console.log(findMaxMin(numbers));

//console.log(min, max)

console.log(Math.min(...numbers), Math.max(...numbers));
