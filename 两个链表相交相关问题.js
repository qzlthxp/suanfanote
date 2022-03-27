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
  let slowP = head.next
  let firstP = head.next.next

  while (firstP && firstP.next) {
    if (slowP === firstP) {
      firstP = head
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

/**
 * 两个单链表相交，从某个节点开始，
 * 后面节点都是公共的
 *
 * 第一种情况
 * 两个单链表都是无环结构。每个链表都先遍历一遍
 * 记录各自长度、尾节点。先判断尾节点一不一样，
 * 尾节点不一样肯定不相交
 * 然后长链表先走差值步（长链表长度100，短的80，长的先走20）
 * 短链表现在跟着一起走，走到相同节点，返回此节点
 */
function noLoop(headA, headB) {
  if (headA === null || headB === null) {
    return null
  }
  let curA = headA
  let curB = headB
  let n = 0
  while (curA.next !== null) {
    n++
    curA = curA.next
  }
  while (curB.next !== null) {
    n--
    curB = curB.next
  }
  // 判断尾节点相等
  if (curA !== curB) {
    return null
  }

  // 长链表先走差值步
  curA = headA
  curB = headB
  if (n > 0) {
    while (n !== 0) {
      n--
      curA = curA.next
    }
  } else {
    while (n !== 0) {
      n++
      curB = curB.next
    }
  }

  // 同时走知道相交，返回相交节点
  while (curA !== curB) {
    curA = curA.next
    curB = curB.next
  }

  return curA
}

/**
 * 第二种情况
 * 一个有环，一个无环不可能相交
 */

/**
 * 第三种情况
 * 两个单链表都有环，那么入环节点就是第一个相交节点
 */
