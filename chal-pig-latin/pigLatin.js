// Write your solution below:

let pigLatin = (str) => {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let newStr = str.split(' ')
    let newPhrase = ''
    newStr.forEach(word => {
            if (vowels.includes(word[0])){
                newPhrase += word + 'yay '
            }else {
                newPhrase += word.slice(1) + word[0] + 'ay '
            }        
    })
    return newPhrase;
}

console.log(pigLatin('Hello World'))