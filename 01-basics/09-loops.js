// 1. 打印 1 到 100
// 2. 求 1 到 100 所有偶数的和 → 2550
// 3. 求 5 的阶乘 → 120（用循环写，别硬编码）
// 4. 找出 1 到 100 里第一个能被 7 整除的数（用 break）
// 5. 打印 1 到 20，但跳过所有 3 的倍数（用 continue）
for (let i = 1; i < 101; i++) {
  console.log(i);
}
let sums = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sums = sums + i;
  }
}
console.log(sums);
let result = 1;
for (let i = 1; i <= 5; i++) {
  result = result * i;
}
console.log(result);
// 4. 找出 1 到 100 里第一个能被 7 整除的数
for (let i = 1; i <= 100; i++) {
  if (i % 7 === 0) {
    console.log(i);
    break;
    // 这里填 break 还是 continue？
  }
}
// 5. 打印 1 到 20，但跳过所有 3 的倍数
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}
//九九乘法表
for (let i = 1; i <= 9; i++) {
  let row = ""
  for (let j = 1; j <= i; j++) {
    row = row + (j + "×" + i + "=" + j * i + "  ");
  }
  console.log(row);
}
//两个变式
for (let i = 9; i >= 1; i--) {
  let row = ""
  for (let j = 1; j <= i; j++) {
    row = row + (j + "×" + i + "=" + j * i + "  ");
  }
  console.log(row);
}
for (let i = 1; i <= 9; i++) {
  let row = "";
  for (let j = i; j <= 9; j++) {
    row = row + (j + "x" + i + "=" + j * i + " ");
  }
  console.log(row);
}