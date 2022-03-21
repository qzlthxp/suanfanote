const str = '121'

function foo(str) {
  const arr = str.split('')

  for (let i = 0; i < str.length; i++) {
    if (str[i] === arr[arr.length - 1]) {
      arr.pop()
    }
  }

  return arr.length === 0
}

console.log(foo(str))
