function isPalindrome(word) {
    let j = word.length - 1

    for(let i = 0; i < word.length/2; i++){
        if (word[i] != word[j]){
            return false
        }
        j--
    return true
    }
}

const word = 'racecar'
if(isPalindrome(word)) {
    console.log('It is a palindrome!')
}
else {
    console.log('It is not a palindrome!')
} 