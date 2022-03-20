/**
 * 冒泡排序思想：
 * 两两相比后面一个数比当前的数大（小）就交换，
 * 一轮下来可以把极大（小）的数交换到当前位置
 *
 */

const arr = [623, 51, 73, 723, 6, 2]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }

  console.log(arr)
}

bubbleSort(arr)
