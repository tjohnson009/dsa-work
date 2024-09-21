export class LinkedList {
    constructor() {
        this.head = null; 
        this.tail = null; 
    }

    append(value) {
        if (value !== null) {
            if (this.head === null) {
                this.head = new ListNode(value); 
                this.tail = this.head; 
            } else {
                // traverse through the nodes until we get to one that points to null - add the node to the nextNode value of that node
            let current = this.head; 
                while (current.nextNode !== null) {
                    current = current.nextNode; 
                }
                // current is located at the tail presently
                current.nextNode = new ListNode(value); 
                this.tail = current.nextNode; 
            }
        } else {
            return "Values cannot be null."; 
        }
    }

    prepend(value) {
        if (this.size === 0) {
            return this.append(value);  
        }
        // create new node from value
        let node = new ListNode(value); 
        // new Node.nextNode = previous head
        node.nextNode = this.head; 
        // make the LinkedList head = new Node
        this.head = node; 
    }

    get size() { 
        if (this.head === null) {
            return 0; 
        } else {
            let num = 1; 
            let current = this.head; 
            while (current.nextNode !== null) {
                current = current.nextNode; 
                num++; 
            }
            // current is located at the tail presently
            return num; 
        }
    }

    get getHead() {
        return this.head; 
    }

    get getTail() {
        return this.tail; 
    }

    at(index) { 
        // for loop
        let current = this.head; 
        if (this.size > index && index >= 0) {

            if (index === 0) {
                return this.head; 
            }
            for (let i = 0; i < index; i++) {
                current = current.nextNode; 
            }
            return current; 
        } else {
            throw new Error(`Index ${index} either does not exist or is invalid.`); 
        }
    }

    pop() {
        if (this.size === 0) {
            return `No nodes in list. `
        }

        if (this.size === 1) {
            this.head = null; 
            this.tail = null; 
            return; 
        }
        let previous = null; 
        let current = this.head; 
        while (current.nextNode !== null) {
            previous = current; 
            current = current.nextNode; 
        }
        previous.nextNode = null; 
        this.tail = previous; 
    }

    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true
            } else {
                current = current.nextNode;
            }
        }
            return false; 
    }

    find(value) {
        let current = this.head; 
        let index = 0; 
        while (current !== null) {
            if (current.value === value) {
                return index; 
            } else {
                index++; 
                current = current.nextNode; 
            }
        }
        return null; 
    }

    toString() {
        let current = this.head; 
        let string = ``;
        while (current !== null) {
            string += `( ${current.value} ) -> `; 
            current = current.nextNode; 
        }
        string += `null `; 
        return string; 
    }

    insertAt(value, index) {
        let previous = null;
        let current = this.head; 
        if (index < 0 || index > this.size) {
            return `Invalid`; 
        }
        let newNode = new ListNode(value); 
        if (index === this.size) {
            this.tail = newNode; 
        }
        if (index === 0) {
            newNode.nextNode = current; 
            this.head = newNode;   
            return; 
        }

        for (let i = 0; i < index; i++) {
            previous = current; 
            current = current.nextNode; 
        }
        previous.nextNode = newNode; 
        newNode.nextNode = current; 

    }

    removeAt(index) {
        let previous = null; 
        let current = this.head; 
        if (this.head === null) {
            throw new Error(`Cannot remove a node that doesn't exist.`); 
        }
        if (index >= 0 && index < this.size) {
            // remove head, tail, or middle node
            if (index === 0) {
                if (this.size === 1) {
                    this.head = null;
                    this.tail = null; 
                }
                 this.head = current.nextNode; 
                 return; 
            }

            for (let i = 0; i < index; i++) {
                previous = current; 
                current = current.nextNode; 
            }
            previous.nextNode = current.nextNode; 
            if (previous.nextNode === null) {
                this.tail = previous; 
            }
            
        } else {
            throw new Error(`Index is not valid`); 
        }
    }
}

export class ListNode {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode; 
    }
}