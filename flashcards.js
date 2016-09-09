"use strict"

let prompt = require('prompt')
let fs =require('fs')
let soal = JSON.parse(fs.readFileSync('data.json','utf8'))
let i = 0
let kesempatan = 0

class FlashCard {
  static promptAnswer(){
    prompt.get('answer',function(err, result){
      if (result.answer.toLowerCase() == soal[i].term.toLowerCase()){
        console.log("Jawaban anda benar")
        i++
        FlashCard.cetakSoal(soal.length)
      } else {
        console.log("Jawaban anda salah, coba lagi")
        kesempatan++
        FlashCard.cetakSoal(soal.length)
      }
    })
  }

  static cetakSoal(questionQty){
    if(kesempatan<3){
      if (i < questionQty){
        console.log(soal[i].definition)
        FlashCard.promptAnswer()
      } else {
        console.log("Bye...")
      }
    }
    else{
      console.log("Anda Sudah Melewati Batas 3x salah")
    }
  }
}

FlashCard.cetakSoal(soal.length)
