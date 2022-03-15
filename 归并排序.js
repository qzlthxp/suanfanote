const arr = [123, 21, 32, 314]

function process(arr, L, R) {
  if (L === R) return

  const mid = L + ((R - L) >> 1)
  process(arr, L, mid)
  process(arr, mid + 1, R)
  merge(arr, L, mid, R)
}

function merge(arr, L, mid, R) {
  let i = L
  let j = mid + 1
  const help = []

  while (i <= mid && j <= R) {
    if (arr[i] <= arr[j]) {
      help.push(arr[i++])
    } else {
      help.push(arr[j++])
    }
  }

  while (i <= mid) {
    help.push(arr[i++])
  }

  while (j <= R) {
    help.push(arr[j++])
  }

  for (i = 0; i < help.length; i++) {
    arr[L + i] = help[i]
  }
}

process(arr, 0, arr.length - 1)
console.log(arr)
