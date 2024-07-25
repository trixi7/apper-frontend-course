function reverse(word) {
    const reversedletters = []

    for(let i = word.length-1; i>=0; i--) {
        reversedletters.push(word[i])
    }
    
    return reversedletters.join('')
   } 
   
   const word = "hello"
   const reversedWord = reverse(word)
   console.log(reversedWord)