const arr = [12, 312, 4512, 12, 124]

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
