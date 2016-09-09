"use strict"
let prompt = require('prompt')
let fs = require('fs')
let data = JSON.parse(fs.readFileSync('data.json'))
let input = 0

//soal soal dari data.json
class Soal {
  static promptjawaban(){
    prompt.get('jawaban',function(err, result){
      if (result.jawaban.toLowerCase() == data[input].term.toLowerCase()){
        console.log("Anda benar, ayo lanjut ke pertanyaan berikutnya")
        input++
        Soal.queue(data.length)
      } else {
        console.log("Anda salah, di coba lagi ya")
        Soal.queue(data.length)
      }
    })
  }


  static queue(index){
    if (input < index){
      console.log("------------------------------------------------------------------")
      console.log(data[input].definition)
      Soal.promptjawaban()
    } else {
      console.log("flashcard sudah selesai")
    }
  }
}

Soal.queue(data.length)
