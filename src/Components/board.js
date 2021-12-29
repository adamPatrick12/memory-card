import Randomizor from "./randomCardGen"
import '../App.css';
import Logo from "../images/nbaLogo.png"

const GameBoard = () => {
    
  function displaypopup()
{
    var popup = document.querySelector('.hover_bkgr_fricc');
     popup.style.display = 'block';
}

function removePopOut()
{
    var popupBtn = document.querySelector('.hover_bkgr_fricc');
    popupBtn.style.display = 'none';
}

  
  return(
        
        <div className = "gameBoard">    
          <div className="header"> 
          <img className="nbaLogo" src= {Logo} alt="" />
          <a onClick={displaypopup} class="trigger_popup_fricc">How to Play</a>
          <h1>MEMORY GAME</h1>
         

                <div class="hover_bkgr_fricc">
                    <span class="helper"></span>
                    <div>
                        <div onClick={removePopOut} class="popupCloseButton">&times;</div>
                        <p>You are presented with multiple NBA Teams. The teams get shuffled every-time they are clicked. 
                          You <strong>CAN NOT</strong>  click on any image more than once or else your score resets to zero. 
                          The main objective is to get the highest score as possible, which is 15</p>
                    </div>
                </div>
          </div>
           <div className = "gameContainer">
             <Randomizor  />
           </div>
        </div>
    )
}

export default GameBoard