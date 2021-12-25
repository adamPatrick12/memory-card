import Randomizor from "./randomCardGen"
import '../App.css';

const GameBoard = () => {
    
    return(
        <div className = "gameBoard">    
           <div className = "gameContainer">
             <Randomizor  />
           </div>
           
        </div>
    )
}

export default GameBoard