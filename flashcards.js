"use strict"
// write your code here
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs')
let q1 = JSON.parse(fs.readFileSync('data.json'))
let poin = 100
let value = 0


class Ask {
  static ques_1() {


    rl.question(q1[value].definition.toLowerCase(), (answer) => {
      if (value < q1.length - 1) {
        if (answer.toLowerCase() == q1[value].term.toLowerCase()) {
          Pertanyaan.betul()
        } else {
          Pertanyaan.salah()
        }
      } else {
        console.log('Selamat kamu menang !');
        console.log(`Poin kamu adalah : ${poin}`);
        rl.close()
      }
    });
  }
}
class Pertanyaan {
  static betul() {
    for (let i = 0; i < 200; i++) {
      console.log(`\n`);
    }
    console.log('Anda betul')
    value++
    Ask.ques_1()
  }
  static salah() {
    for (let i = 0; i < 200; i++) {
      console.log(`\n`);
    }
    poin -= 20
    console.log('Salah, coba lagi');
    console.log(`Sisa poin anda : ${poin}`);
    Ask.ques_1();
  }
}

Ask.ques_1()
