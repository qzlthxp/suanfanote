/**
 * 快排思想
 * 随便确定一个基数
 * 从给定范围最右边开始找一个比基数小（大）的数，并且要求右侧
 * 指针小于左侧指针，从左侧找一个比基数大的数。如果左指针小于
 * 右指针两数交换。如果相等跳出查找，将基数与现在指针所指向的数
 * 进行交换，将基数排到中间
 *
 * 继续排列基数左侧和右侧的数
 *
 *
 */

const arr = [146, 25, 1, 61, 67, 4, 846, 8, 57, 95]

function quickSort(arr, L, R) {
  if (L > R) return

  let i = L
  let j = R

  while (i !== j) {
    while (arr[j] >= arr[L] && i < j) {
      j--
    }

    while (arr[i] <= arr[L] && i < j) {
      i++
    }

    if (i < j) {
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  ;[arr[L], arr[i]] = [arr[i], arr[L]]

  quickSort(arr, L, i - 1)
  quickSort(arr, i + 1, R)
}

quickSort(arr, 0, arr.length - 1)

console.log(arr)
