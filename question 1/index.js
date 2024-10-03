const lowerCaseWords =  (mixedArray) => {
    return new Promise((resolved, rejected) => {
        let lowercaseWord = []

        mixedArray.forEach(element => {
            if (typeof element === typeof "string") {
                lowercaseWord.push(element.toLowerCase())
            }
        });
        resolved(lowercaseWord)
        rejected("An error has occurred")
    })
}


const mixedArray = [ "HELLO", 10, false, true, 22, 122.23, "BicycleS" ];
const wordsArray =  lowerCaseWords(mixedArray)
console.log(wordsArray)