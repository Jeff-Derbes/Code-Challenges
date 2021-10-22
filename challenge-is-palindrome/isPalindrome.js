// Write your code below


let isPalindrome = (str) => {
    let forward = str.split('')
    let reverse = forward.reverse()
    let newStr = reverse.join('')
    if (newStr === str){
        return true
    }else {
        return false
    }
};


console.log(isPalindrome('racecar'))
