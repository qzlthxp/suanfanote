const arr = [7, 6, 5, 4, 3, 2, 1]

for (let i = 1; i < arr.length; i++) {
  let j = i - 1
  while (j >= 0 && arr[j] > arr[j + 1]) {
    ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    j--
  }
}

console.log(arr)
