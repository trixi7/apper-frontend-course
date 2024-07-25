function fizzbuzz(number) {
    if (number <= 0) {
        return "Number must be greater than 0"
    }
    else if (number % 3 === 0 && number % 5 === 0) {
        return "FizzBuzz"
    } 
    else if (number % 3 === 0) {
        return "Fizz"
    } 
    else if (number % 5 === 0) {
        return "Buzz"
    } 
    else {
        return number
    }
}

console.log(fizzbuzz(-7));
console.log(fizzbuzz(15));
console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(17));