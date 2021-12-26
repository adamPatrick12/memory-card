import { React, useState } from "react";
import "../App.css";

let scoreNum = 0;
let bestScore = 0
let cardClicked1 = 0;
let cardClicked2 = 0;

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

  const checkIfClicked = (e) => {
    let textContent = e.target.textContent;
    

    if (textContent === "1") {
      cardClicked1++;
      scoreNum++
      updateScore(scoreNum)
      if (cardClicked1 === 2) {
        bestScore = scoreNum-1
        updateHighScore(bestScore)
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked1 = 0
      }
    } else if (textContent === "2") {
      scoreNum++
      cardClicked2++;
      updateScore(scoreNum)
      if (cardClicked2 === 2) {
        bestScore = scoreNum-1
        updateHighScore(bestScore)
        scoreNum = 0
        updateScore(scoreNum)
        cardClicked2 = 0
      }
    }
  };

  const onClick = (e) => {
    checkIfClicked(e);
    shuffle();
  };

  const element = (
    <div className="gamePiece" onClick={onClick}>
      1
    </div>
  );
  const element2 = (
    <div className="gamePiece" onClick={onClick}>
      2
    </div>
  );
  const element3 = (
    <div className="gamePiece" onClick={shuffle}>
      3
    </div>
  );
  const element4 = (
    <div className="gamePiece" onClick={shuffle}>
      4
    </div>
  );
  const element5 = (
    <div className="gamePiece" onClick={shuffle}>
      5
    </div>
  );
  const element6 = (
    <div className="gamePiece" onClick={shuffle}>
      6
    </div>
  );
  const element7 = (
    <div className="gamePiece" onClick={shuffle}>
      7
    </div>
  );
  const element8 = (
    <div className="gamePiece" onClick={shuffle}>
      8
    </div>
  );
  const element9 = (
    <div className="gamePiece" onClick={shuffle}>
      9
    </div>
  );
  const element10 = (
    <div className="gamePiece" onClick={shuffle}>
      10
    </div>
  );
  const element11 = (
    <div className="gamePiece" onClick={shuffle}>
      11
    </div>
  );
  const element12 = (
    <div className="gamePiece" onClick={shuffle}>
      12
    </div>
  );
  const element13 = (
    <div className="gamePiece" onClick={shuffle}>
      13
    </div>
  );
  const element14 = (
    <div className="gamePiece" onClick={shuffle}>
      14
    </div>
  );
  const element15 = (
    <div className="gamePiece" onClick={shuffle}>
      15
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
  <div>{cards}</div>
  <div>{score}</div>
  <div>{highScore}</div>
  </div>
  );
};

export default Randomizor;
