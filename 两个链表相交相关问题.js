/**
 * 题目: 给定两个可能有环也可能无环的单链表，
 * 头节点head1 和 head2。请实现一个函数，
 * 如果两链表相交，请返回相交的第一个节点。
 * 如果不相交，返回null
 *
 * 要求：如果两个链表长度之和为N，事件复杂度达到O(N)，
 * 额外空间复杂度O(1)
 *
 *
 * 问题分解
 * 先验证单链表是否有环
 */

// hash表
function hasRingHash(head) {
  let set = new Set()
  while (head && head.next) {
    if (!set.has(head)) {
      set.add(head)
    } else {
      return head
    }
    head = head.next
  }
  return null
}

// 快慢指针
/**
 * 快指针每次走两步，满指针每次走一步
 * 如果有环肯定会在环内相遇
 * 然后快指针回到头结点，快慢指针每次都走一步，
 * 最后快慢指针会在入环的第一个节点再次相遇
 */
function hasRingPointer(head) {
  let headNode = head
  let slowP = head
  let firstP = head

  while (firstP && firstP.next) {
    if (slowP === firstP) {
      firstP = headNode
      break
    }
    slowP = slowP.next
    firstP = firstP.next.next
  }

  if (firstP === null) {
    return null
  }

  while (firstP && firstP.next) {
    if (slowP === firstP) {
      return slowP
    }
    slowP = slowP.next
    firstP = firstP.next
  }
}
