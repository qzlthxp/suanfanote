/**
 * 选择排序思想：
 * 给定一个数组，从0开始，每次在当前位置到 N-1
 * 位置上找一个最小（最大）值，与当前位置的数进行交换
 *
 * 为什么说选择排序不具有稳定性？
 * 🌰 [3,3,3,3,1,3,3,3]
 * 第一轮1和0位置3交换，破坏了0位置3与1-3位置3的相对次序
 */

const arr = [12, 421, 45, 215, 215]

function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  console.log(arr)
}

selectSort(arr)
