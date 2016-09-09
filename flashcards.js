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

function print_pertanyaan(value,nyawa){
  if(value == myCard.length){
    console.log("SELESAI! MENANG KAMU!!")
    return rl.close();
  }

  rl.question(`${myCard[value].definition} `, (answer) => {
    if(answer == myCard[value].term){
      console.log("JAGO YA LOE!")
      value++
      print_pertanyaan(value,nyawa)
    }

    else if(answer != myCard[value].term){
      nyawa--
      if(nyawa == 0){
        console.log("WKWK! CUPU!")
        return rl.close();
      }
      console.log("SALAH WOE! NYAWA KAMU SISA " + nyawa)
      print_pertanyaan(value,nyawa)
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

console.log("Main quiz yuk!")

let i = 0; //index pertanyaan dimulai
let j = 3; //jumlah nyawa pemain
print_pertanyaan(i,j);
