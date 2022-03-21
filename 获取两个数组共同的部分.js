const arr1 = [1, 2, 5]
const arr2 = [0, 2, 3, 5]

function foo(arr1, arr2) {
  let i = 0
  let j = 0

  const res = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++
    }
    if (arr1[i] > arr2[j]) {
      j++
    }
    if (arr1[i] === arr2[j]) {
      res.push(arr1[i++])
      j++
    }
  }

  console.log(res)
}

foo(arr1, arr2)
