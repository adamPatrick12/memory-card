import Randomizor from "./randomCardGen"
import { useState } from "react"

const GameBoard = () => {
    
    
    
    return(
        <div className = "gameBoard">
            <div className = "gameContainer">
               <Randomizor array = {[1,2,3,4,5]}/>
            </div>
        </div>
    )
}

export default GameBoard