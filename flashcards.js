'use strict'
// write your code here
const fs = require ('fs')
const readline = require ('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class Flashcards {

  static questions(){
     Flashcards.questions = JSON.parse(fs.readFileSync('data.json'))
  }

  static playGame(){
      Flashcards.flash(Flashcards.questions,0)
  }

  static correct(index){
    console.log("correct!\n")
    Flashcards.flash(Flashcards.questions,index+1)
  }

  static wrong(index){
    console.log("Incorrect! Try again.\n");
    Flashcards.flash(Flashcards.questions,index)
  }
  static title(){
    console.log("Welcome to JS Flash Cards. To Play, just enter the correct term for each definition. Ready? Go! \n")
  }

  static flash(flashcardQuestion,index){
    if(index < flashcardQuestion.length){
    rl.question(flashcardQuestion[index].definition,(guess)=>{
      if(flashcardQuestion[index].term.toLowerCase() == guess.toLowerCase()) {
        Flashcards.correct(index)
        } else{
        Flashcards.wrong(index)
      }
    })
    } else{
      rl.close()
    }
  }

}
Flashcards.title()
Flashcards.questions()
Flashcards.playGame()
