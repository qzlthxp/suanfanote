const arr = [1, 2, 3, 4, 5, 6, 7]

function heapSort(arr) {
  let heapSize = 0

  /**
   * 时间：O(NlogN)
   *
   * 建立大根堆
   */
  for (let i = 0; i < arr.length; i++) {
    heapSize++
    heapInsert(arr, i)
  }

  /**
   * 时间：O(NlogN)
   *
   * 每次找出最大的放到末尾
   * 剩余的数继续按照大根堆排 最大放到头
   */
  while (heapSize > 1) {
    heapSize--
    ;[arr[0], arr[heapSize]] = [arr[heapSize], arr[0]]
    heapnify(arr, 0, heapSize)
  }

  console.log(arr)
}

function heapInsert(arr, index) {
  while (arr[index] > arr[Math.floor(Math.abs((index - 1) / 2))]) {
    ;[arr[index], arr[Math.floor(Math.abs((index - 1) / 2))]] = [
      arr[Math.floor(Math.abs((index - 1) / 2))],
      arr[index]
    ]
    index = Math.floor(Math.abs((index - 1) / 2))
  }
}

function heapnify(arr, index, heapSize) {
  let left = index * 2 + 1
  while (left < heapSize) {
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left

    largest = arr[largest] > arr[index] ? largest : index

    if (largest === index) {
      break
    }

    ;[arr[largest], arr[index]] = [arr[index], arr[largest]]

    index = largest

    left = index * 2 + 1
  }
}

heapSort(arr)
