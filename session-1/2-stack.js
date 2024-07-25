class Stack{
    items = [];

    check() {
        console.log(this.items)
      }

    push(element) {
    if (element.constructor === Array){
        for (let i = 0; i < element.length; i++){
            if (typeof element[i] !== 'string'){
                continue
            }
            this.push(element[i])
        }
        return
    }
    
    else if (typeof element !== 'string') {
      throw new Error("Only string values are allowed")
    }

    this.items.push(element)
    }

    pop() {
        if (this.items.length == 0) {
          console.log("Stack is currently empty")
        }
        this.items.pop()
    }
} 

const stack = new Stack()
stack.push("Milk")
stack.push("Egg")
stack.check()
stack.pop()
stack.check()
stack.pop()
stack.check()
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()
stack.pop()
stack.check()
stack.pop()
stack.check()
stack.pop()