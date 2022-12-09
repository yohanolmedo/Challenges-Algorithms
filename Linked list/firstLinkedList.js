//1 --> 2 --> 3 --> 4 --> null

//La linked List nos regresa un objeto, como la que se muestra a continuación
// let singlyLinkedList = {
//     head: {
//         value: 1,
//         next: {
//             value: 2,
//             next: {
//                 value: 3,
//                 next: {
//                     value: 4,
//                     next: null
//                 }
//             }
//         }
//     }
// }

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class MySingleLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode; 
        this.tail = newNode;
        this.length++;
        
        return this;
    }
}

let myLinkedList = new MySingleLinkedList(1);