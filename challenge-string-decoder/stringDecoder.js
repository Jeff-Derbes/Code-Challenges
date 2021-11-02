let decoder = code => {
    code = code.split('')

    // for (let i = 0; i < code.length; i++) {
    //     if (typeof code[i] === 'number') {

    //     }
    for (index of code) {
        if (typeof code[index] === 'number') {
            console.log(code)
        }
    }
}

decoder('0r')

