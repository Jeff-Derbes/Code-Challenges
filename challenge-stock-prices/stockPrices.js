const best = (arr) => {
    let sellPrice = 0
    let sellPriceIndex = 0

    arr.forEach((i, el) => {
        if (i > sellPrice){
            sellPrice = i
            sellPriceIndex = el
        }
    })
    let buyPrice = sellPrice

    for (let i = 0; i < sellPriceIndex; i++){
        if (arr[i] < buyPrice){
            buyPrice = arr[i];
        }
    }
    if(sellPrice <= buyPrice){
        return 0 
    }
    return `Buy at ${buyPrice}, sell at ${sellPrice}. Your profit will be ${sellPrice - buyPrice}`
}
    


 console.log(best([3, 4, 7, 8, 2, 9, 3, 5, 1]));

