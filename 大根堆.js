const arr = [1, 2, 3, 4, 5, 6, 7]

function big(arr) {
  const help = []

  for (let i = 0; i < arr.length; i++) {
    help.push(arr[i])
    // while (j > 0) {
    //   const k = Math.floor((j - 1) / 2)
    //   if (help[j] > help[k]) {
    //     ;[help[j], help[k]] = [help[k], help[j]]
    //     j = k
    //   } else {
    //     break
    //   }
    // }
    // while (help[j] > help[Math.floor(Math.abs((j - 1) / 2))]) {
    //   ;[help[j], help[Math.floor(Math.abs((j - 1) / 2))]] = [
    //     help[Math.floor(Math.abs((j - 1) / 2))],
    //     help[j]
    //   ]
    //   j = Math.floor(Math.abs((j - 1) / 2))
    // }
    heapInsert(help, i)
  }

  return help
}

function heapInsert(arr, index) {
  while (arr[index] > arr[Math.floor(Math.abs((index - 1) / 2))]) {
    const k = Math.floor(Math.abs((index - 1) / 2))
    ;[arr[k], arr[index]] = [arr[index], arr[k]]

    index = k
  }
}

console.log(big(arr)) // 7 4 6 1 3 2 5

/**
 * 取最大剩余还是大根堆
 */
function getMax(arr) {
  heapsize = arr.length
  let value = arr[0]
  console.log(value)
  arr[0] = arr[arr.length - 1]
  heapsize--
  heapify(arr, 0, heapsize)
  console.log(arr.slice(0, heapsize))
}

function heapify(arr, index, heapsize) {
  // while (
  //   arr[index * 2 + 1] &&
  //   (arr[index * 2 + 2] === undefined
  //     ? arr[index] < arr[index * 2 + 1]
  //     : arr[index] < Math.max(arr[index * 2 + 1], arr[index * 2 + 2]))
  // ) {
  //   const left = arr[index * 2 + 1]
  //   const right = arr[index * 2 + 2]
  //   if (!right) {
  //     ;[arr[index], arr[index * 2 + 1]] = [arr[index * 2 + 1], arr[index]]
  //     index = index * 2 + 1
  //   } else {
  //     if (left > right) {
  //       ;[arr[index], arr[index * 2 + 1]] = [arr[index * 2 + 1], arr[index]]
  //       index = index * 2 + 1
  //     } else {
  //       ;[arr[index], arr[index * 2 + 2]] = [arr[index * 2 + 2], arr[index]]
  //       index = index * 2 + 2
  //     }
  //   }
  // }

  let left = index * 2 + 1

  // 有左孩子 (有孩子)
  while (left < heapsize) {
    // 右节点存在且值大于左节点 较大的索引是右节点 否则都是左节点
    let largest =
      left + 1 < heapsize && arr[left + 1] > arr[left] ? left + 1 : left
    // 左右结点较大的值 大于 index 的值 较大索引就是上面的 小于就是index
    largest = arr[largest] > arr[index] ? largest : index

    if (largest === index) {
      break
    }

    ;[arr[index], arr[largest]] = [arr[largest], arr[index]]
    index = largest
    left = index * 2 + 1
  }
}

getMax([9, 7, 8, 6, 5, 3, 2, 1])
