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

function headCreated() {
  this.head = null;
}

function linkedList(value) {
  this.value = value;
  this.next = null;
}

headCreated.prototype.add = function (value) {
  if (this.head === null) {
    this.head = new linkedList(value);
  } else {
    let ref = this.head;
    while (ref.next !== null) {
      ref = ref.next;
    }
    ref.next = new linkedList(value);
  }
};

headCreated.prototype.search = function (value) {
  if (this.head === null) {
    return 0;
  } else {
    let ref = this.head;
    while (ref.next !== null) {
      ref = ref.next;
    }
    ref.next = new linkedList(value);
  }
};

// Search Method

headCreated.prototype.search = function (value) {
  let ref = this.head;
  if (ref.value === value) {
    return true;
  } else {
    while (ref.next !== null) {
      if (ref.next.value === value) {
        return true;
      }
      ref = ref.next;
    }
  }
  return false;
};

let prueba = new headCreated();

prueba.add(50);
prueba.add(500);
prueba.add("hola");
prueba.add(36);
prueba.add(90);
prueba.add("yohan");
prueba;
