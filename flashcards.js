'use strict'
const fs = require ('fs')
const readline = require ('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// write your code here
class Flashcards {

  static init_questions(){
     Flashcards.questions = JSON.parse(fs.readFileSync('data.json'))
  }

  static play(){
      Flashcards.score = 100
      Flashcards.quest(Flashcards.questions,0)
  }

  static quest(flash_ques,idx){
    if(idx < flash_ques.length){
    rl.question(flash_ques[idx].definition+" :",(user_ans)=>{
      if(flash_ques[idx].term.toLowerCase() == user_ans.toLowerCase()) {
        console.log("thats it!!")
        Flashcards.quest(Flashcards.questions,idx+1)
        }
       else{
        console.log("It's not that hard man!!");
        Flashcards.score -= 5
        Flashcards.quest(flash_ques,idx)
      }
    })
    }
    else{
      console.log(`Your's score is ${Flashcards.score}`)
      rl.close()
    }
  }

}

Flashcards.init_questions()
Flashcards.play()
