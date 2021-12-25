import {React, useState} from "react"
import '../App.css';

const Randomizor = () => {

    const shuffle = () => {               // This function and the useState aren't hoisted so I have to formate the elements likes this. 
        let i = cards.length - 1;
        for (; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = cards[i];
          cards[i] = cards[j];
          cards[j] = temp;
        }
        update([...cards])
        console.log(cards)
      }

      let buttonClick = false;

    const checkIfClick = () =>{
  
      

      if(buttonClick === false){
        console.log('One Click')
      }else{
        alert("You already click that")
      }
      
      buttonClick = true

    }  

    const onClick = (e) =>{
      console.log(e.target.textContent)

      checkIfClick()
      shuffle()
    }
      
      const element = <div value = "1" className = "gamePiece" onClick = {onClick}>1</div>
      const element2 = <div className = "gamePiece" onClick = {onClick} >2</div>
      const element3 = <div className = "gamePiece" onClick = {shuffle} >3</div>
      const element4 = <div className = "gamePiece"  onClick = {shuffle} >4</div>
      const element5 = <div className = "gamePiece" onClick = {shuffle} >5</div>
      const element6 = <div className = "gamePiece" onClick = {shuffle} >6</div>
      const element7 = <div className = "gamePiece" onClick = {shuffle} >7</div>
      const element8 = <div className = "gamePiece" onClick = {shuffle} >8</div>
      const element9 = <div className = "gamePiece" onClick = {shuffle} >9</div>
      const element10 = <div className = "gamePiece" onClick = {shuffle} >10</div>
      const element11 = <div className = "gamePiece" onClick = {shuffle} >11</div>
      const element12 = <div className = "gamePiece" onClick = {shuffle} >12</div>
      const element13 = <div className = "gamePiece" onClick = {shuffle} >13</div>
      const element14 = <div className = "gamePiece" onClick = {shuffle} >14</div>
      const element15 = <div className = "gamePiece" onClick = {shuffle} >15</div>
    

      const [cards, update] = useState([element, element2, element3, element4, element5, element6, element7, 
        element8, element9, element10, element11, element12, element13, element14, element15])  

    return(
        <div>
            {cards}
        </div>
        
    )
}

export default Randomizor