
// for (let n = 100; n <= 999; n++) {
//   let a = Math.floor(n / 100);
//   let b = Math.floor(n / 10) % 10;
//   let c = n % 10;
//   // 1. 拆出百位 a、十位 b、个位 c
//   if (a * a * a + b * b * b + c * c * c === n) {
//     console.log(n);
//   }
//   // 2. 判断 a³ + b³ + c³ 是否等于 n
//   // 3. 相等就 console.log(n)
// }
const readline = require('node:readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  const target = Math.floor(Math.random() * 50) + 1;
  let tries = 0;
  let win = false;

  while (tries < 5) {
    const input = await rl.question('猜一个 1-50 的数：');
    const guess = Number(input);
    tries++;
    if (guess === target) {
      console.log(`猜对了！用了${tries}次，机会还剩${5 - tries}次`);
      win = true;
      break;
    } else if (guess > target) {
      console.log(`大了，机会还剩${5 - tries}次`);
    } else if (guess < target) {
      console.log(`小了，机会还剩${5 - tries}次`);
    }
  }
  if (!win) {
    console.log(`机会用完了，答案是${target}`);
  }

  rl.close();
}

main();