var intro, USmap;
var username;
var gameState = 0;
var timer;
var Qtime = 0;
var randLocation, randAvatar;
var x,y,state;
var answerBox, verifyButton;
var score = 0;

function preload() {


}


function setup() {
  createCanvas(windowWidth,windowHeight);

  intro = new Intro()
  USmap = new USMap()

  answerBox= createInput("Enter State Name")
  verifyButton = createButton("Go!")
  
}

function draw() {
  background(255,255,255);

  
  console.log(gameState)

  if(gameState === 0)
  {
    intro.display()
  }

  

  if(gameState === 1) {
    USmap.display()
    textSize(20)
    text("x:" + mouseX,windowWidth-130, 30)
    text("y:" + mouseY, windowWidth-130,50)
    
    answerBox.position(1300,70)
    verifyButton.position(1300,100)

    verifyButton.mousePressed(()=>{

      if(timer > 0) {
      var userAnswer = answerBox.value()
      userAnswer = userAnswer.toLowerCase()

      if(state ===  userAnswer) {
        score++
        
      }
    }
    })

  }
  
}