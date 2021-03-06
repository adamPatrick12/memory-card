import { React, useState } from "react";
import "../App.css";

import GoldenState from "../images/GoldenState.png"
import Toronto from "../images/Toronto.png"
import Milwaukee from "../images/Milwaukkee.png"
import Celtics from "../images/Celtics.png"
import Clippers from "../images/Clippers.png"
import Jazz from "../images/Jazz.png"
import Wizard from "../images/Wizards.png"
import Pistons from "../images/Pistons.png"
import Philly from "../images/Philly.png"
import Memphis from "../images/Memphis.png"
import Hawks from "../images/Hawks.png"
import Mavs from "../images/Mavs.png"
import Magic from "../images/Magic.png"
import Hornets from "../images/Hornets.png"
import Bulls from "../images/Bulls.png"

let scoreNum = 0;
let bestScore = 0
let cardClicked1 = 0;
let cardClicked2 = 0;
let cardClicked3 = 0;
let cardClicked4 = 0;
let cardClicked5 = 0;
let cardClicked6 = 0;
let cardClicked7 = 0;
let cardClicked8 = 0;
let cardClicked9 = 0;
let cardClicked10 = 0;
let cardClicked11 = 0;
let cardClicked12 = 0;
let cardClicked13 = 0;
let cardClicked14 = 0;
let cardClicked15 = 0;


const Randomizor = () => {
  const shuffle = () => {
    // This function and the useState aren't hoisted so I have to formate the elements likes this.
    let i = cards.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));        //Sorting Logic
      const temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    update([...cards]);
  };

        //Alot is going on here so let me explain 
  const checkIfClicked = (e) => {       
    let textContent = e.target.id;   //store the id in a variable to check what card the user clicked
  
    if (textContent === "1") {    //Checking what card the user clicked
      cardClicked1++;     //Adding +1 to a variable so the program knows the user alrealdy clicked that card
      scoreNum++          // If it is the first time clicking the score will increase by one
      updateScore(scoreNum) //updating state
      if (cardClicked1 === 2) {   //If card is clicked again program will enter into this conditional 
        if(bestScore < scoreNum-1){   //checking if the bestscore is less then current score, if it is then we update the best score
          bestScore = scoreNum-1      
          updateHighScore(bestScore)
        }
        scoreNum = 0            //score is set to 0 since user clicked same card twice
        updateScore(scoreNum)   //updating state
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0         //set card click back to one so user can play again right away
      }
    } else if (textContent === "2") {
      scoreNum++
      cardClicked2++;
      updateScore(scoreNum)
      if (cardClicked2 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0   
      }
    }else if (textContent === "3") {
      scoreNum++
      cardClicked3++;
      updateScore(scoreNum)
      if (cardClicked3 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "4") {
      scoreNum++
      cardClicked4++;
      updateScore(scoreNum)
      if (cardClicked4 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    } else if (textContent === "5") {
      scoreNum++
      cardClicked5++;
      updateScore(scoreNum)
      if (cardClicked5 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "6") {
      scoreNum++
      cardClicked6++;
      updateScore(scoreNum)
      if (cardClicked6 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "7") {
      scoreNum++
      cardClicked7++;
      updateScore(scoreNum)
      if (cardClicked7 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "8") {
      scoreNum++
      cardClicked8++;
      updateScore(scoreNum)
      if (cardClicked8 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "9") {
      scoreNum++
      cardClicked9++;
      updateScore(scoreNum)
      if (cardClicked9 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "10") {
      scoreNum++
      cardClicked10++;
      updateScore(scoreNum)
      if (cardClicked10 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "11") {
      scoreNum++
      cardClicked11++;
      updateScore(scoreNum)
      if (cardClicked11 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "12") {
      scoreNum++
      cardClicked12++;
      updateScore(scoreNum)
      if (cardClicked12 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "13") {
      scoreNum++
      cardClicked13++;
      updateScore(scoreNum)
      if (cardClicked13 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "14") {
      scoreNum++
      cardClicked14++;
      updateScore(scoreNum)
      if (cardClicked14 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }else if (textContent === "15") {
      scoreNum++
      cardClicked15++;
      updateScore(scoreNum)
      if (cardClicked15 === 2) {
        if(bestScore < scoreNum-1){
          bestScore = scoreNum-1
          updateHighScore(bestScore)
        }
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = cardClicked2  = cardClicked3 = cardClicked4 = cardClicked5 = cardClicked6 = cardClicked7 = 
        cardClicked8 = cardClicked9 = cardClicked10 = cardClicked11 = cardClicked12 = cardClicked13 = cardClicked14 = cardClicked15 = 0 
      }
    }
    console.log(textContent)
  };

  const onClick = (e) => {
    checkIfClicked(e);
    shuffle();
  };

  const element = (
    <div className="gamePiece" onClick={onClick}>
     <img id = "1" className= "logo" src= {GoldenState} alt="" />
    </div>
  );
  const element2 = (
    <div  className="gamePiece" onClick={onClick}>
       <img id = "2" className= "logo" src= {Toronto} alt="" />
    </div>
  );
  const element3 = (
    <div className="gamePiece" onClick={onClick}>
      <img className= "logo" id = "3" src= {Milwaukee} alt="" />
    </div>
  );
  const element4 = (
    <div className="gamePiece" onClick={onClick}>
       <img className= "logo" id = "4" src= {Philly} alt="" />
    </div>
  );
  const element5 = (
    <div className="gamePiece" onClick={onClick}>
       <img className= "logo" id = "5" src= {Pistons} alt="" />
    </div>
  );
  const element6 = (
    <div className="gamePiece" onClick={onClick}>
       <img className= "logo" id = "6" src= {Wizard} alt="" />
    </div>
  );
  const element7 = (
    <div className="gamePiece" onClick={onClick}>
       <img className= "logo" id = "7" src= {Memphis} alt="" />
    </div>
  );
  const element8 = (
    <div className="gamePiece" onClick={onClick}>
       <img className= "logo" id = "8" src= {Celtics} alt="" />
    </div>
  );
  const element9 = (
    <div className="gamePiece" onClick={onClick}>
      <img className= "logo" id = "9" src= {Jazz} alt="" />
    </div>
  );
  const element10 = (
    <div className="gamePiece" onClick={onClick}>
       <img className= "logo" id = "10" src= {Clippers} alt="" />
    </div>
  );
  const element11 = (
    <div className="gamePiece" onClick={onClick}>
        <img className= "logo" id = "11" src= {Hornets} alt="" />
    </div>
  );
  const element12 = (
    <div className="gamePiece" onClick={onClick}>
       <img className= "logo" id = "12" src= {Bulls} alt="" />
    </div>
  );
  const element13 = (
    <div className="gamePiece" onClick={onClick}>
        <img className= "logo" id = "13" src= {Magic} alt="" />
    </div>
  );
  const element14 = (
    <div className="gamePiece" onClick={onClick}>
      <img className= "logo" id = "14" src= {Mavs} alt="" />
    </div>
  );
  const element15 = (
    <div className="gamePiece" onClick={onClick}>
        <img className= "logo" id = "8" src= {Hawks} alt="" />
    </div>
  );

  const [cards, update] = useState([
    element,
    element2,
    element3,
    element4,
    element5,
    element6,
    element7,
    element8,
    element9,
    element10,
    element11,
    element12,
    element13,
    element14,
    element15,
  ]);

  const [score, updateScore] = useState(0)

  const [highScore, updateHighScore] = useState(0)

  

  

  return (
  <div>
  <div className="scoreBoard">
    <div className = "score" > Score: {score}</div>
    <div className = "score">Highscore: {highScore}</div>
  </div>
  <div>{cards}</div>
  </div>
  );
};

export default Randomizor;
