"use strict"
// write your code here
let fs = require('fs')
var prompt = require('prompt');
let file = 'data.json'
var content = fs.readFileSync(file);
var jsonContent = JSON.parse(content);
var jawaban=[]


let idxSoal1 = getRandomInt(1,jsonContent.length)
let idxSoal2 = getRandomInt(1,jsonContent.length)
let idxSoal3 = getRandomInt(1,jsonContent.length)

let score = 0
console.log(jsonContent[idxSoal1].definition)


prompt.start()

prompt.get('jawaban', function (err, result) {
    if(cekHasil(result.jawaban,jsonContent[idxSoal1].term)){
      console.log(`Jawaban kamu salaaaaaah`)
    }
    else{
      console.log(`Jawaban kamu benar`);
      score++
    }
    console.log(jsonContent[idxSoal2].definition)
    prompt.get('jawaban', function (err, result) {
        if(cekHasil(result.jawabanm,jsonContent[idxSoal2].term)){
          console.log(`Jawaban kamu salaaaaaah`)
        }
        else{
          console.log(`Jawaban kamu benar`);
          score++
        }
        console.log(jsonContent[idxSoal3].definition)
        prompt.get('jawaban', function (err, result) {
            if(cekHasil(result.jawabanm,jsonContent[idxSoal3].term)){
              console.log(`Jawaban kamu salaaaaaah`)
            }
            else{
              console.log(`Jawaban kamu benar`);
              score++
            }
            if(score==3){
              displayMenang()
            }
            else{
              displayKalah()
            }
        });
    });
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function cekHasil(jawabanUser,jawabanSoal){
  if(jawabanUser!=jawabanSoal)return false
  else return true
}

function displayMenang(){
  console.log(`===============================================`);
  console.log('======Anda bisa menjawab semua, selamat!======');
  console.log(`===============================================`);
}

function displayKalah(){
  console.log(`===============================================`);
  console.log(`Anda tidak berhasil menjawab semua dengan benar`);
  console.log(`===============================================`);
}
