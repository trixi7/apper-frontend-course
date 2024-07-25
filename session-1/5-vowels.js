function convertToVowels(word) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    var vowelsinword = []

    for (let i = 0; i<word.length; i++) {
        if(vowels.includes(word[i])) {
            vowelsinword.push(word[i])
        }
    }
    
    return vowelsinword.join("")
}

const word = "thisissomeword"
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels)