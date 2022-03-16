/**
 * 什么是小和？
 *
 * 有一个数组每一个数左边比它小的数的和
 *
 * 例如 [1, 2, 3]
 * 小和：1没有，2有一个1，3有一个1一个2 加起来 1 + 1 + 2 = 4
 *
 */

/**
 * 问题转换：
 * 小和问题 <=> 一个数右边比他大的数的个数乘以这个数然后求和
 * 例如 [1,2,3]
 * 1右边有两个比它大
 * 2右边有一个比它大
 * 1 * 2 + 2 * 1 = 4
 */

const arr = [1, 1, 2, 1, 2, 3]
function process(arr, L, R) {
  if (L == R) {
    return 0
  }
  const mid = L + ((R - L) >> 1)
  return process(arr, L, mid) + process(arr, mid + 1, R) + merge(arr, L, mid, R)
}

function merge(arr, L, M, R) {
  let i = 0
  let j = L
  let k = M + 1
  const help = []
  let counter = 0
  while (j <= M && k <= R) {
    if (arr[j] < arr[k]) {
      counter += arr[j] * (R - k + 1)
      help[i++] = arr[j++]
    } else {
      help[i++] = arr[k++]
    }
  }

  while (j <= M) {
    help[i++] = arr[j++]
  }

  while (k <= R) {
    help[i++] = arr[k++]
  }

  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i]
  }
  console.log(counter)
  return counter
}

console.log(process(arr, 0, arr.length - 1))
