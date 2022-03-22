function createNode(value, next) {
  this.next = next === undefined ? null : next
  this.value = value === undefined ? 0 : value
}
// 1 -> 2 -> 3 -> 2 -> 1 -> null
let head = new createNode(1, null)
head.next = new createNode(2, null)
head.next.next = new createNode(3, null)
head.next.next.next = new createNode(2, null)
head.next.next.next.next = new createNode(1, null)

let mid = head
let j = head

while (j && j.next) {
  mid = mid.next
  j = j.next.next
}

