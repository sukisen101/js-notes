const readline = require('node:readline/promises');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

async function main() {
  const target = Math.floor(Math.random() * 50) + 1;
  let tries = 0;
  let win = false;

  while (tries < 5) {
    const input = await rl.question('猜一个 1-50 的数：');
    const guess = Number(input);
    if (Number.isNaN(guess) || guess < 1 || guess > 50) {
      console.log('请输入 1-50 之间的数字');
      continue;          // ← 跳过这一轮，tries 不加  //加上用户输入不在指定范围的判断，先判断再循环

    }
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