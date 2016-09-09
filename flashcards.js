"use strict"
// write your code here

var fs = require('fs')
var listCardJSON = JSON.parse(fs.readFileSync('data.json'))

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Kartu {
  constructor(component) {
    this.definition = component['definition']
    this.term = component['term']
  }
}

function print_pertanyaan(value){
  rl.question(`${myCard[value].definition} `, (answer) => {
    // rl.question('Type in your password: ', (password) => {
    //   if(username == "dokter" || username == "resepsionis"){
    //     print_menu_dokter()
    //   }
    //   else {
    //     rl.close()
    //     console.log("Maaf anda tidak bisa masuk")
    //   }
    if(answer==myCard[value].term){
      console.log("Jawaban loe benar!")
    }
    else{
      console.log("SALAH LOE JING.")
    }
  });
}

let myCard = []

for (let i =0;i<listCardJSON.length;i++){
  myCard.push(new Kartu({
    definition:listCardJSON[i].definition,
    term:listCardJSON[i].term
  }))
}

// console.log(myCard[0].definition);
//
// myCard[0].test();

console.log("Selamat datang!")
//
// for(let i=0;i<myCard.length;i++){
//   //console.log(`${myCard[i].definition}`)
//
//   print_pertanyaan(i);
// }
//
