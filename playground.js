const str = '1223344544332221'

function test(str) {
  let mid =
    str.length % 2 === 0 ? (str.length - 1) >> 1 : ((str.length - 1) >> 1) - 1
  let top = 0
  const arr = []
  while (mid >= 0) {
    arr.push(str[top++])
    mid--
  }
  mid = ((str.length - 1) >> 1) + 1

  for (let j = mid; j < str.length; j++) {
    if (arr[top - 1] === str[j]) {
      top--
    }
  }

  console.log(top === 0)
}

test(str)
