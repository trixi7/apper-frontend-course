class Queue {
    constructor() {
        this.groceryList = [] //empty array
    }

    enqueue(toQueue) {
        if (typeof toQueue !== 'string') { //check if string or not
            console.log('Error: This queue only takes string values')
        } 
        else { //add to array
            this.groceryList.push(toQueue) 
        }
    }
    
    dequeue() {
        if (this.groceryList.length === 0) { //check if empty or not
            return 'Queue is currently empty'
        }
        else { //remove 1st element (FIFO)
            this.groceryList.shift()
        }
    }

    check() {
        return this.groceryList //current state of the groceryList array
    }
}

//test
const my_queue = new Queue();

my_queue.enqueue(777) // error
console.log(my_queue.check()) // []

my_queue.enqueue('Milk')
my_queue.enqueue('Eggs')
console.log(my_queue.check()) // ['Milk', 'Eggs']

my_queue.dequeue()
console.log(my_queue.check()) // ['Eggs']

my_queue.dequeue()
console.log(my_queue.check()) // []

console.log(my_queue.dequeue()) // 'Queue is currently empty'

my_queue.dequeue()
console.log(my_queue.dequeue()) // 'Queue is currently empty'

my_queue.enqueue('Hatdog')
console.log(my_queue.check()) // ['Hatdog']