import {React, useState, useEffect} from "react"
import '../App.css';

const element = <div className = "gamePiece" >1</div>
const element2 = <div className = "gamePiece" >2</div>
const element3 = <div className = "gamePiece" >3</div>
const element4 = <div className = "gamePiece" >4</div>
const element5 = <div className = "gamePiece" >5</div>

const Randomizor = (props) => {

    const [cards, shuffleCards] = useState(props.array)
   
   
         const shuffle = () => {
        let i = cards.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = cards[i];
          cards[i] = cards[j];
          cards[j] = temp;
        }
      }
      
      useEffect(() => {
        return shuffleCards(cards)
      },)
     

    return(
        <div>
            <button onClick = {shuffle}>CLICK ME</button>
            {cards}
        </div>
        
    )
}

export default Randomizor