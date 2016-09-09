"use strict"
// write your code here

const fs = require('fs');
const readline = require('readline');

class Controller{
  constructor(property = {}){
    this.questionIndex = 0;
    this.tryCounter = 1;
    this.tryMaxCounter = 3;
    this.model = new Model(fs, (process.argv[2]) ? process.argv[2] : null);
    this.view = new View();
  }
  startGame(){
    this.view.printHeadline();
    this.processQuestion();
  }
  setQuestion(){
    return `\nQuestion #${this.questionIndex+1} : ${this.model.getQuestion(this.questionIndex)}\nAnswer      : `;
  }
  processQuestion(){
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: this.setQuestion()
    });

    rl.prompt();
    rl.on("line", (line) => {
      if(line.trim().toLowerCase() == "exit") rl.close();

      let answer = this.checkAnswer(line.trim());
      this.view.printText((answer) ? "Correct, Bro!" : `Wrong! ${this.tryCounter} of ${this.tryMaxCounter} try attempt`);

      if(answer || this.tryCounter >= this.tryMaxCounter){
        if(this.questionIndex >= this.model.data.length-1) rl.close();
        else this.questionIndex += 1;
        this.tryCounter = 1;
        rl.setPrompt(this.setQuestion());
        rl.prompt();
      } else {
        this.tryCounter += 1;
        rl.prompt();
      }
    }).on("close", () => {
      this.view.printText('\n\n\n ============== \nHave a great day!\n\n');
      process.exit(0);
    });
  }
  checkAnswer(answer = null){
    if(answer.toLowerCase() == this.model.getAnswer(this.questionIndex).toLowerCase()){
      return true;
    }
    return false;
  }
}

class Model{
  constructor(fs, file = null){
    this._fs = fs;
    this._filename = file || "data.json";
    this._data = this.readFile();
  }
  set data(value) { this._data.push(value); }
  get data() { return this._data; }
  /*
  writeFile(data){
    fs.writeFile('social.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log(data);
    });
  }
  */
  readFile(){
    return JSON.parse(this._fs.readFileSync(this._filename, "utf8"))
  }
  getQuestion(index){
    return this.data[index].definition;
  }
  getAnswer(index){
    return this.data[index].term;
  }
}

class View{
  constructor(property = {}){

  }
  printNewLine(count = 0){
    for(let idx = 0; idx < count; idx++) console.log("\n")
  }
  printClearScreen(){
    console.log("\x1B[2J");
  }
  printHeadline(){
    this.printClearScreen();
    this.printText("$ node flashcards.js");
    this.printText("Welcome to JS Flash Cards. To play, just enter the correct term for each definition. Ready? Go!");
    this.printNewLine(1);
    this.printText(`Type "exit" to exit the game!`)
    this.printNewLine(1);
  }
  printText(text){
    console.log(text);
  }
}




let flashcards_game = new Controller();

flashcards_game.startGame();
