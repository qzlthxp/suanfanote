/**
 * 归并排序的思想
 * 递归大问题化小问题
 *
 * 从中间分为两块，左右都有序之后，进行merge
 *
 * merge 两个指针分别指向两个头部
 * 声明一个新数组，谁小谁push进数组，相同左边先push
 * 相同左边优先保证了相对次序不会改变
 *
 */

const arr = [123, 21, 32, 314]

function process(arr, L, R) {
  if (L === R) return

  const mid = L + ((R - L) >> 1)
  process(arr, L, mid)
  process(arr, mid + 1, R)
  merge(arr, L, mid, R)
}

function merge(arr, L, mid, R) {
  let i = L
  let j = mid + 1
  const help = []

  while (i <= mid && j <= R) {
    if (arr[i] <= arr[j]) {
      help.push(arr[i++])
    } else {
      help.push(arr[j++])
    }
  }

  while (i <= mid) {
    help.push(arr[i++])
  }

  while (j <= R) {
    help.push(arr[j++])
  }

  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i]
  }
}

process(arr, 0, arr.length - 1)
console.log(arr)
