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
      if (q1[value] != q1.length) {
        if (answer.toLowerCase() == q1[value].term.toLowerCase()) {
          Pertanyaan.betul()
        } else {
          Pertanyaan.salah()
        }
      } else {
        Quit.quit()
      }

    });

  }
}

class Quit {
  static quit() {
    lo

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
//   static ques_2() {
//     rl.question(q1[1].definition.toLowerCase(), (answer) => {
//       if (answer.toLowerCase() == q1[1].term.toLowerCase()) {
//         console.log('Anda betul lagi')
//         Ask.ques_3() //, answer);
//
//       } else {
//         console.log('Anda salah, coba lagi');
//         Ask.ques_2()
//       }
//     })
//   }
//   static ques_3() {
//     rl.question(q1[2].definition.toLowerCase(), (answer) => {
//       if (answer.toLowerCase() == q1[2].term.toLowerCase()) {
//         console.log('Anda betul lagi')
//         Ask.ques_4() //, answer);
//
//       } else {
//         console.log('Anda salah, coba lagi');
//         Ask.ques_3()
//       }
//     })
//   }
//   static ques_4() {
//     rl.question(q1[3].definition.toLowerCase(), (answer) => {
//       if (answer.toLowerCase() == q1[3].term.toLowerCase()) {
//         console.log('Anda betul lagi')
//         Ask.ques_5() //, answer);
//
//       } else {
//         console.log('Anda salah, coba lagi');
//         Ask.ques_4()
//       }
//     })
//   }
//   static ques_5() {
//     rl.question(q1[4].definition.toLowerCase(), (answer) => {
//       if (answer.toLowerCase() == q1[4].term.toLowerCase()) {
//         console.log('Anda betul lagi')
//         Ask.ques_6() //, answer);
//
//       } else {
//         console.log('Anda salah, coba lagi');
//         Ask.ques_5()
//       }
//     })
//   }
//   static ques_6() {
//     rl.question(q1[5].definition.toLowerCase(), (answer) => {
//       if (answer.toLowerCase() == q1[5].term.toLowerCase()) {
//         console.log('Anda betul lagi')
//         rl.close()
//       } else {
//         console.log('Anda salah, coba lagi');
//         Ask.ques_6()
//       }
//     })
//   }
// }
Ask.ques_1()
  // Ask.ques_2()
