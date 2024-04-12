import './App.css'
import Welcome from './Components/Welcome'
import GameBoard from './Components/GameBoard'
import { useEffect, useState } from 'react'

function App() {
  //screenDisplay will dictate which screen to display, either the welcome screen or the game screen
  const [screenDisplay, setScreenDisplay] = useState(false);

  //playerNames will house the names passed back from the Welcome component
  const [playerNames, setPlayerNames] = useState<string[]>([]);

  //display function will be passed through to both Components (Welcome and GameBoard) and return a response that will tell the app which screen to display. The namesArr parameter is optional and will only be passed back by the Welcome component.
  const display = (response: string, namesArr?: string[]) => {
    //using a switch case to handle the responses from out display function.
    switch (response) {
      case 'Game':
        setPlayerNames(namesArr ?? []);
        break;
      case 'Welcome':
        setScreenDisplay(false);
        break;
      default:
        break
    }
  };

  useEffect(() => {
    //the below conditional statement is part of the useEffect dependancy and is checking to see if the playerNames state changes. If the length is not 0, screenDisplay will be set to true.
    if (playerNames.length !== 0) setScreenDisplay(true);

  }, [playerNames]);

  return (
    <div className='parent-container'>
      {screenDisplay === false ?
        <Welcome display={display} /> :
        <GameBoard display={display} names={playerNames} />
      }
    </div>
  )
}

export default App;
