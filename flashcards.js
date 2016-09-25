"use strict"
let fs = require("fs")
let prompt = require("prompt")
let dataFile = 'data.json'
let answerSchema = {
  properties: {
    answer: {
      message: 'Name must be only letters, spaces, or dashes',
      required: true,
      description: "Guess"
    }
  }
}

prompt.message = ""
prompt.delimiter = ":"
prompt.start();

fs.readFile(dataFile, (err, data) => {
  if (err) throw err;
  let dataList = JSON.parse(data.toString());
  let run = true
  let num = 0

  class System {

    // Show welcome message
    static start() {
      console.log("Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!\n")
      System.question(dataList, num)
    }

    // Show question to user
    static question(dataList, num) {
      console.log("Definition")
      console.log(dataList[num].definition + "\n")
      System.promptAnswer(dataList, num)
    }

    // Prompt for user answer
    static promptAnswer(dataList, num) {
      prompt.get(answerSchema, function(err, result) {
        System.checkAnswer(dataList, num, result.answer)
      })
    }

    // Check user answer if correct
    static checkAnswer(dataList, num, answer) {
      if (answer.toLowerCase() == dataList[num].term.toLowerCase()) {
        num++
        System.response(dataList, num, true)
      } else {
        System.response(dataList, num, false)
        System.promptAnswer(dataList, num)
      }
    }

    // Show answer response
    static response(dataList, num, bin) {
      switch (bin) {
        case true:
          console.log("Correct!\n")
          if (dataList.length > num) {
            System.question(dataList, num)
          } else {
            console.log("Thank you for playing!\n")
          }
          break
        case false:
          console.log("Incorrect! Try Again\n")
          break
      }
    }
  }

  // Start gameplay
  System.start()
})
