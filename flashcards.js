"use strict"
// write your code here

//Declaring library to be used in a variable
//fs or prompt
let prompt = require('prompt')
let fs =require('fs')

//Assigning questions and answers into a variable
let quiz = JSON.parse(fs.readFileSync('data.json','utf8'))
let i = 0

//Make Question Class
class Generic {
  static promptAnswer(){
    prompt.get('answer',function(err, result){
      if (result.answer == quiz[i].term){
        console.log("Jawaban anda benar")
        i++
        Generic.checkIndexRun(quiz.length)
      } else {
        console.log("Jawaban anda salah, coba lagi")
        Generic.checkIndexRun(quiz.length)
      }
    })
  }

  static checkIndexRun(questionQty){
    if (i < questionQty){
      console.log(quiz[i].definition)
      Generic.promptAnswer()
    } else {
      console.log("Quiz sudah selesai")
    }
  }
}

//within question class, you can input the question and answer
//Create method that will run through the questions and answers, and give a statement based on the answer given
  //Create method to capture input from user, can use prompt or readline
  //Create smaller method to check the answer, and give the statement

Generic.checkIndexRun(quiz.length)
