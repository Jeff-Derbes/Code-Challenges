let hasMoreVowels = (word) => {
    word = word.toLowerCase()
    let vowelsSum = 0;
    let consSum = 0;

    for (let i = 0; i < word.length; i++){
        switch (word[i]) {
            case 'a':
                vowelsSum += 1;
                break;
            case 'e':
                vowelsSum += 1;
                break;
            case 'i':
                vowelsSum += 1;
                break;
            case 'o':
                vowelsSum += 1;
                break;
            case 'u':
                vowelsSum += 1;
                break; 
            default: 
                consSum += 1;
        }
    }
    return (vowelsSum <= consSum) ? false : true;
}

console.log(hasMoreVowels('Aal'));