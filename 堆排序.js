const arr = [1, 2, 3, 4, 5, 6, 7]

function heapSort(arr) {
  let heapSize = 0
  let heapArr = []

  for (let i = 0; i < arr.length; i++) {
    heapSize++
    heapArr.push(arr[i])
    heapInsert(heapArr, heapSize - 1)
  }

  while (heapSize > 0) {
    heapSize--
    ;[heapArr[0], heapArr[heapSize]] = [heapArr[heapSize], heapArr[0]]
    heapnify(heapArr, 0, heapSize)
  }

  console.log(heapSize, heapArr)
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
