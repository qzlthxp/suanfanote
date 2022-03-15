## master 公式

$$T(N) = a * T(\frac{N}{b}) + O(N^c)$$

T(N)：母问题
a：子问题调用次数
$$T(\frac{N}{b})$$：每个子问题规模都是等量的都是$$\frac{N}{b}$$规模
O(N^c)：出去子问题调用之外剩余过程时间复杂度

```js
// 例如
function process(arr, L, R) {
  if (L === R) return arr[L]
  const mid = L + ((R - L) >> 1) //取中点
  const left = process(L, mid)
  const right = process(mid + 1, right)
  return Math.max(left, right)
}

/**
 * 这个母问题就是process
 *
 * 子问题规模 N/2
 * 调了两次
 *
 * 剩余过程时间复杂度是O（1）
 * /
```

![](/img/master%E5%85%AC%E5%BC%8F%E6%B1%82%E6%97%B6%E9%97%B4%E5%A4%8D%E6%9D%82%E5%BA%A6.png)
