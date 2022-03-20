/**
 * 插入排序基本思想
 *
 * 0-0 有序
 * 0-1 有序，如果无序 0和1 交换顺序
 * 0-2 有序，如果无序 1和2 交换顺序，如果交换之后1位置的数不比前一个小了就停止交换
 *
 *
 */

const arr = [12, 6, 36, 42, 61, 632, 421, 6]

function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i

    while (arr[j] < arr[j - 1]) {
      ;[arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      j--
    }
  }

  console.log(arr)
}

insertSort(arr)
